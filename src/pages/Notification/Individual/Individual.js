import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../Components/TablePaginationComponent";
import Loader from "../../loginForms/loader/Loader";
import {useGetNumberQuery} from "../../../redux/features/api/WithdrawRequestApi";
import { useGetIndividualNotificationQuery ,useAddIndividualNotificationMutation} from ".././../../redux/features/api/IndividualNotificationApi";
import { toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import Select from 'react-select';



const IndividualNotification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null); 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [sendRequestShow, setSendRequestShow] = useState(false);
  const [isSearching, setIsSearching] = useState(false); 
  const [addIndividualNotification] = useAddIndividualNotificationMutation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberList, setPhoneNumberList] = useState("");
  const { data: PhoneNumberData } = useGetNumberQuery(phoneNumberList);
  const { data: getIndividualNotificationData, isLoading ,refetch} = useGetIndividualNotificationQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getIndividualNotificationData && getIndividualNotificationData.data) {
      setData(getIndividualNotificationData.data);
      setStartIndex(getIndividualNotificationData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getIndividualNotificationData.pagination.totalItems);
      setEndIndex(getIndividualNotificationData.pagination.endIndex)
      setTotalPages(getIndividualNotificationData.pagination.totalPages);
    }
  }, [getIndividualNotificationData, currentPage]);

 

  const handleSendRequestClose = () => {
    setSendRequestShow(false);
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput }).then(() => {
      setIsSearching(false); 
    });
  };

  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSendRequest = async () => {
    try {
      const response = await addIndividualNotification({
        phoneNumber:phoneNumber,
        title: title,
        body: body,
        image:file,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setSendRequestShow(false);
        navigate("/admin/individual");
        setPhoneNumber("")
        setTitle("")
        setBody("")
        setFile("")
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
        setPhoneNumber("")
        setTitle("")
        setBody("")
        setFile("")
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]); 
  };
  const handleInputChange = (newValue) => {
    setPhoneNumberList(newValue);
  };
  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Body",
      accessor: "body",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (props) => {
        const imageUrl = props.value; 
        return <img src={imageUrl} alt="img" style={{ maxWidth: '50px', maxHeight: '50px' }} />;
      },
    },
    {
      Header: "Created Date",
      accessor: "createdAt.date",
      width: "auto",
      minWidth: 100,
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), 'dd-MM-yyyy');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "Created Time",
      accessor: "createdAt.time",
      width: "auto",
      minWidth: 100,
      Cell: ({ value }) => {
        const timeString = value; 
        const parsedTime = new Date(`2000-01-01T${timeString}`);
        const formattedTime = format(parsedTime, 'hh:mm a');
        return <span>{formattedTime}</span>;
      },
    },
  ];
  
  return (
    <>
      {!isLoading ? (
        <Container fluid className="my-4">
          <Row className="boxShadow p-4 mb-4 mt-2">
          <Col className="d-flex flex-row justify-content-between mt-1 ">
                <h4 className="fw-bold "> Individual Notification</h4>
                <div>
                  <Button
                    style={{ backgroundColor: "#0077B2", border: "none" }}
                    className="p-2 m-1"
                    onClick={() => setSendRequestShow(true)}
                   
                  >
                    <IoIosSend size={20} /><span className="d-none d-md-inline"> Individual Notification</span>
                  </Button>
                </div>
              </Col>
            </Row>
              {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
              <Row className=" boxShadow p-3 mb-4 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search notification..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                {searchInput && (
                  <span className="input-group-text" onClick={handleClear}>
                    <BsX />
                  </span>
                )}
              </div>
            </Col>
            <Col  className="d-flex flex-column text-center my-4"
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button
                style={{ backgroundColor: "#0077B2", border: "none" }}
                onClick={handleSearch}
                disabled={isSearching} 
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </Col>
          </Row>
      
        
          <Row className="justify-content-center boxShadow p-4 mb-4 ">
            <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
              <BasicTable
                COLUMNS={COLUMNS}
                MOCK_DATA={data}
                currentPage={currentPage}
                startIndex={startIndex}
                endIndex={endIndex}
                setCurrentPage={setCurrentPage}
                totalItems={totalItems}
                totalPages={totalPages}
              />
            </Col>
          </Row>
          
          <Modal
            show={sendRequestShow}
            onHide={handleSendRequestClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Send Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number </Form.Label>
                  <Select
  
  placeholder="Enter PhoneNumber"
  onInputChange={handleInputChange}
  options={(PhoneNumberData?.data || []).map((data) => ({
    value:  data, 
     label: `${data}`,
  }))}
  value={PhoneNumberData?.data?.find((option) => option.value === phoneNumber)}
  onChange={(selectedOption) => {
    console.log("Selected input data:", selectedOption.value);
    setPhoneNumber(selectedOption.value);
    console.log(phoneNumber);
    
    console.log(PhoneNumberData.data);
  }}
/>
               
                </Form.Group>
                <Form.Group controlId="formBasicUPI">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicWithdrawAmount">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicFile" className="mt-2">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleSendRequestClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#0077B2", border: "none" }}
                onClick={handleSendRequest}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default IndividualNotification;
