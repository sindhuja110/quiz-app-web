import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import { BsSearch, BsX } from "react-icons/bs"; 
import BasicTable from "../../Components/TablePaginationComponent";
import Select from "react-select";
import Loader from "../loginForms/loader/Loader";
import { useGetEmailListQuery, useGetUserListQuery, useSendMailMutation } from "../../redux/features/api/UserListApi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";
import { format } from "date-fns";
import axios from "axios";


const UserList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchInput, setSearchInput] = useState(""); 
  const[date,setDate]= useState("");
  const [seconddata,setSeconddata]=useState("");
  const [isSearching, setIsSearching] = useState(false); 
  const [isSubmit, setIsSumbit] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [mailHeader, setMailHeader] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [mail, setMail] = useState("");
  const [mailList, setMailList] = useState("");
  const{data:MailData} = useGetEmailListQuery(mailList);
  const [SendMail] = useSendMailMutation();
  const { data: getUserlistData, isLoading, refetch } = useGetUserListQuery({ page: currentPage, search: searchTerm });

console.log(MailData);


console.log(mailList);
// console.log(mail);
useEffect(() => {
  if (seconddata && seconddata.data) {
    setData(seconddata.data);
    setStartIndex(seconddata.pagination.startIndex);
    setCurrentPage(seconddata.pagination.currentPage);
    setTotalItem(seconddata.pagination.totalItems);
    setEndIndex(seconddata.pagination.endIndex);
    setTotalPages(seconddata.pagination.totalPages);
  }
}, [seconddata]);




useEffect(() => {
  if (getUserlistData && getUserlistData.data) {
    setData(getUserlistData.data);
    setStartIndex(getUserlistData.pagination.startIndex);
    setCurrentPage(currentPage);
    setTotalItem(getUserlistData.pagination.totalItems);
    setEndIndex(getUserlistData.pagination.endIndex)
    setTotalPages(getUserlistData.pagination.totalPages);
  }
}, [getUserlistData, currentPage]);



  const handleSearch = () => {
    setIsSearching(true); 
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput }).then(() => {
      setIsSearching(false); 
    });
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
    setDate("")
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  
  
  // useEffect(() => {
  //   if (MailList && MailList.data) {
  //     const options = MailList.data.map((mail) => ({ value: mail, label: mail }));
  //     setMailOptions(options);
  //   }
  // }, [MailList]);



  
  const handleSubmit = async () => {
    setIsSumbit(true);
    try {
      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/admin/users/${searchTerm}?date=${date}`
      );
  
      if (response.data) {

        setSeconddata(response.data);
        console.log(response.data); 
        setData(response.data.data);
        console.log(response.data.data); 
        
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
    finally {
      setIsSumbit(false);
    }
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
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Referral ID",
      accessor: "referralId",
    },
    {
      Header: "Wallet Amount",
      accessor: "userDetails[0].referralUserWallet", 
      Cell: ({ row }) => {
        const { userDetails } = row.original;
        const referralUserWallet = userDetails && userDetails.length > 0 ? userDetails[0].referralUserWallet : '-';
        return <span>{referralUserWallet}</span>; 
      }
    },    
    {
      Header: "Parent PhoneNumber",
      accessor: "parentPhoneNumber",
    },
    {
      Header: "Child PhoneNumber",
      accessor: "userDetails[0].registeredUsers", 
      Cell: ({ row }) => {
        const { userDetails } = row.original;
        const registeredUsers = userDetails && userDetails.length > 0 ? userDetails[0].registeredUsers : [];
    
        return (
          <ol>
            {registeredUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ol>
        );
      }
    },
    
    {
      Header: "Profile Image",
      accessor: "profileImage",
      Cell: (props) => {
        const imageUrl = props.value;
        return imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        ) : (
          <HiMiniUserCircle  size={30} />
        );
      },
    },


  //    {
  //   Header: "Address",
  //   accessor: "address",
  //   Cell: ({ row }) => {
  //     const { lat, long } = row.original;
  //     const [address, setAddress] = React.useState('');

  //     React.useEffect(() => {
  //       // Fetch address based on lat and long when component mounts
  //       fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`)
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data);
  //           setAddress(data.display_name);
  //         })
  //         .catch(error => {
  //           console.error('Error fetching address:', error);
  //           setAddress('Address not available');
  //         });
  //     }, [lat, long]);
     
  //     return <span>{address}</span>;
    
  //   },
  // },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    Cell: ({ value }) => {
      if (!value) {
        return <span>Invalid Date</span>;
      }
      const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
      return <span>{formattedDateTime}</span>;
    },
  },
    
  ];

  // console.log( mail);
  console.log(mailHeader);
  console.log(mailBody);
 
  
  

  const handleSendRequest = async () => {
   
    try {
       console.log("responce1");
      const response = await SendMail({
        email:mail,
        subject: mailHeader,
        message:mailBody,
       
      });
      console.log("responce2");

      if (response?.data) {
        console.log(response);
        toast.success(response?.data?.message, { autoClose: 1000 });
        setMail("")
        setMailHeader("")
        setMailBody("") 
        handleModalClose(false);  
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
       
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (newValue) => {
    setMailList(newValue);
  };

  return (
    <>
      {!isLoading ? (
        <Container fluid className="my-4">
          <Row className="boxShadow p-4">
          <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold "> User List</h4>
                <div>
                <Button
  style={{ backgroundColor: "#0077B2", border: "none" }}
  className="p-2 m-1"
  onClick={handleModalShow}
>
  <IoIosSend size={20} /><span className="d-none d-md-inline"> Send Mail</span>
</Button>

                </div>
              </Col>
          </Row>
          {/* <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " /> */}
          <Row className=" boxShadow p-4  mb-3 mt-3 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
           
           
           
            <Col className="my-2 mx-2 " xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search UserList..."
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
            <Col  className="d-flex flex-column text-center my-2 "
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button
                style={{ backgroundColor: "#0077B2", border: "none" }}
                onClick={handleSearch}
                disabled={isSearching} // Disable button while searching
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>

              
            </Col>
  
            <Col className="my-2 mx-2 " xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                
              <input
  type="date"
  className="form-control"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
               
              </div>
            </Col>
            <Col  className="d-flex flex-column text-center my-2 "
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button
  onClick={handleSubmit}
  style={{ backgroundColor: "#0077B2", border: "none" }}
  disabled={isSubmit} 
  >
    {isSubmit ? 'Submiting...' : 'Sumbit'}
</Button>


              
            </Col>




            
          </Row>

          <Row className="d-flex flex-column align-items-center justift-content-center boxShadow p-4">
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



          <Modal show={showModal} onHide={handleModalClose} centered>
  <Modal.Header closeButton>
    <Modal.Title>Send Mail</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>

    <Form.Group controlId="recipientSelect">
      <Form.Label>Email</Form.Label>
      <Select
  
  placeholder="Enter Mail"
  onInputChange={handleInputChange}
  options={(MailData?.data || []).map((data) => ({
    value:  data, 
     label: `${data}`,
  }))}
  value={MailData?.data?.find((option) => option.value === mail)}
  onChange={(selectedOption) => {
    console.log("Selected input data:", selectedOption.value);
    setMail(selectedOption.value);
    console.log(mail);
    
    
  }}
/>


    </Form.Group>
      <Form.Group controlId="notificationHeader">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter  Subject"
          value={mailHeader}
          onChange={(e) => setMailHeader(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="notificationBody">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter  Message"
          value={mailBody}
          onChange={(e) => setMailBody(e.target.value)}
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleModalClose}>
      Close
    </Button>
    <Button variant="primary" style={{ backgroundColor: "#0077B2", border: "none" }} onClick={handleSendRequest}>
      Send Mail
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

export default UserList;
