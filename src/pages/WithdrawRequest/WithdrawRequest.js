import React, { useState, useEffect } from "react";
import { Button, Container, Row, Modal, Form, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import BasicTable from "../../../src/components/TablePaginationComponent";
import DeleteModel from "../../../src/components/DeleteModel";
import {
  useGetWithdrawrequestQuery,
  useDeleteWithdrawrequestMutation,
  useEditWithdrawrequestMutation,
  useGetNumberQuery,
  useGetFilterQuery,
  useAddFilterMutation,
} from "../../redux/features/api/WithdrawRequestApi";
import { useAddIndividualNotificationMutation } from "../../redux/features/api/IndividualNotificationApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { BsSearch, BsX } from "react-icons/bs";
import Select from "react-select";
import { format } from "date-fns";

const Withdrawrequest = () => {
  const [editShow, setEditShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteWithdrawrequestApi] = useDeleteWithdrawrequestMutation();
  const [updateWithdrawrequestApi] = useEditWithdrawrequestMutation();
  const [addIndividualNotification] = useAddIndividualNotificationMutation();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [sendRequestShow, setSendRequestShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterOptions, setFilterOptions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: getWithdrawrequestData,
    isLoading,
    refetch,
  } = useGetWithdrawrequestQuery({
    page: currentPage,
    search: searchTerm,
    id: id,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberList, setPhoneNumberList] = useState("");
  const { data: PhoneNumberData } = useGetNumberQuery(phoneNumberList);
  const { data: filterData } = useGetFilterQuery();
  const [addFilter] = useAddFilterMutation();

  useEffect(() => {
    if (getWithdrawrequestData && getWithdrawrequestData.data) {
      setData(getWithdrawrequestData.data);
      setStartIndex(getWithdrawrequestData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getWithdrawrequestData.pagination.totalItems);
      setEndIndex(getWithdrawrequestData.pagination.endIndex);
      setTotalPages(getWithdrawrequestData.pagination.totalPages);
    }
  }, [getWithdrawrequestData, currentPage]);

  useEffect(() => {
    if (filterData && filterData.data) {
      const options = filterData.data.map((option) => ({
        value: option,
        label: option,
      }));
      setFilterOptions(options);
    }
  }, [filterData]);

  const handleFilterChange = async (selectedOption) => {
    try {
      setSelectedFilter(selectedOption);
      console.log("Selected Option:", selectedOption);

      // Make API call to add filter
      const response = await addFilter({ status: selectedOption.value });
      console.log("API Response:", response);

      if (response?.data) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/admin/withdraw-request");
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const deleteWithdrawrequest = async () => {
    try {
      const response = await deleteWithdrawrequestApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditShow = (id) => {
    setEditId(id);
    setEditShow(true);
  };

  const handleEditClose = () => {
    setEditShow(false);
    setEditId(null);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
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

  const handleEditData = async () => {
    try {
      const response = await updateWithdrawrequestApi({
        id: editId,
        data: {
          status: selectedOption,
        },
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        handleEditClose();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendRequestClose = () => {
    setSendRequestShow(false);
  };

  const handleSendRequest = async () => {
    try {
      const response = await addIndividualNotification({
        phoneNumber: phoneNumber,
        title: title,
        body: body,
        image: file,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        navigate("/admin/withdraw-request");
        setSendRequestShow(false);
        setPhoneNumber("");
        setTitle("");
        setBody("");
        setFile("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
        setPhoneNumber("");
        setTitle("");
        setBody("");
        setFile("");
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
      accessor: "s_no",
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi ID",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button variant="warning" onClick={() => handleEditShow(rowIdx)}>
              <FaEdit />
            </Button>
            <Button
              variant="danger"
              className="ms-2"
              onClick={() => deleteHandleShow(rowIdx)}
            >
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <>
          <Container fluid className="mt-3">
            <Row className="boxShadow p-4 mb-4 mt-4">
              <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold" onClick={handleCancel}>
                  Withdraw Request
                </h4>
                <Button
                  style={{ backgroundColor: "#0077B2", border: "none" }}
                  className="p-2"
                  onClick={() => setSendRequestShow(true)}
                >
                  <IoIosSend size={20} />
                  <span className="d-none d-md-inline">
                    {" "}
                    Individual Notification
                  </span>
                </Button>
              </Col>
            </Row>
            {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
            <Row className=" boxShadow p-3 mb-4   d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
              <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
                <Select
                  options={filterOptions}
                  value={selectedFilter}
                  onChange={handleFilterChange}
                  placeholder="Select Filter"
                />
              </Col>
              <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
                <div className="input-group">
                  <span className="input-group-text">
                    <BsSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search PhoneNumber..."
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
              <Col
                className="d-flex flex-column text-center my-4"
                xxl={2}
                xl={2}
                lg={2}
                sm={3}
                md={3}
              >
                <Button
                  style={{ backgroundColor: "#0077B2", border: "none" }}
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </Col>
            </Row>
            <Row className="boxShadow p-4 mb-4">
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
            </Row>
          </Container>

          <DeleteModel
            YES={deleteWithdrawrequest}
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            DESCRIPTION="Are you sure want to delete this Withdrawrequest"
            DELETETITLE="Withdrawrequest"
          />

          <Modal show={editShow} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Withdraw Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Status:</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#0077B2", border: "none" }}
                onClick={handleEditData}
              >
                Update
              </Button>
            </Modal.Footer>
          </Modal>

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
                      value: data,
                      label: `${data}`,
                    }))}
                    value={PhoneNumberData?.data?.find(
                      (option) => option.value === phoneNumber
                    )}
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
                  <Form.Control type="file" onChange={handleFileChange} />
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Withdrawrequest;
