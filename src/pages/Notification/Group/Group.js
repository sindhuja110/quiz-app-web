import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../../src/components/TablePaginationComponent";
import Loader from "../../loginForms/loader/Loader";
import {
  useGetGroupQuery,
  useDeleteGroupMutation,
  useAddGroupMutation,
  useGetNumberQuery,
  useAddGroupNotificationMutation,
} from "../../../redux/features/api/GroupApi";
import { toast } from "react-toastify";
import DeleteModel from "../../../../src/components/DeleteModel";
import { IoIosSend } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import { BsSearch, BsX } from "react-icons/bs";

const Group = () => {
  const [data, setData] = useState([]);
  const [groupname, setGroupname] = useState("");
  const [selectedphoneNumbers, setSelectedphoneNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [addGroupNotification] = useAddGroupNotificationMutation();
  const { data: groupData, isLoading: groupLoading } = useGetGroupQuery({
    page: currentPage,
    search: searchTerm,
  });
  const [deleteGroupApi] = useDeleteGroupMutation();
  const [show, setShow] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const {
    data: phoneData,
    isLoading: numberLoading,
    refetch,
  } = useGetNumberQuery();
  const [addGroup] = useAddGroupMutation();

  console.log(selectedphoneNumbers);

  useEffect(() => {
    if (groupData && groupData.data) {
      setData(groupData.data);
      setStartIndex(groupData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(groupData.pagination.totalItems);
      setEndIndex(groupData.pagination.endIndex);
      setTotalPages(groupData.pagination.totalPages);
    }
  }, [groupData, currentPage]);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/admin/group-notification");
  };

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
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

  const deleteGroup = async () => {
    try {
      const response = await deleteGroupApi(idToDelete);
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

  const handleSendRequest = async () => {
    try {
      const response = await addGroupNotification({
        groupName: groupName,
        title: title,
        body: body,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        navigate("/admin/group-notification");
        setGroupName("");
        setTitle("");
        setBody("");
        setShowModal(false);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const CreateGroup = async () => {
    try {
      const selectedPhoneNumbers = selectedphoneNumbers.map(
        (phone) => phone.value
      );

      const response = await addGroup({
        groupname: groupname,
        phoneNumbers: selectedPhoneNumbers,
      });

      console.log(selectedPhoneNumbers);

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setGroupname("");
        setSelectedphoneNumbers([]);
        handleClose();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NumberOptions = phoneData
    ? phoneData.data.map((phoneNumber) => ({
        value: phoneNumber,
        label: phoneNumber,
      }))
    : [];
  console.log(NumberOptions);

  const handleEmailChange = (selectedOptions) => {
    setSelectedphoneNumbers(selectedOptions);
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Group Name",
      accessor: "groupName",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Phone Numbers",
      accessor: "phoneNumbers",
      width: "auto",
      minWidth: 100,
      Cell: ({ row }) => {
        return (
          <ul>
            {row.original.phoneNumbers.map((phoneNumber) => (
              <li key={phoneNumber._id}>{phoneNumber.phoneNumber}</li>
            ))}
          </ul>
        );
      },
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      fixed: "right",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button
              variant="danger"
              className="m-1"
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
      {!groupLoading && !numberLoading ? (
        <>
          <Container fluid className="my-4">
            <Row className="boxShadow p-4 mb-4 mt-2">
              <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold " onClick={handleCancel}>
                  <AiOutlineArrowLeft /> Group
                </h4>
                <div>
                  <Button
                    style={{ backgroundColor: "#0077B2", border: "none" }}
                    className="p-2 m-1"
                    onClick={() => setShowModal(true)}
                  >
                    <IoIosSend size={20} />
                    <span className="d-none d-md-inline">
                      {" "}
                      Send Notification
                    </span>
                  </Button>
                  <Button
                    style={{ backgroundColor: "#0077B2", border: "none" }}
                    className="p-2 m-1"
                    onClick={handleShow}
                  >
                    <FaPlus size={20} />
                    <span className="d-none d-md-inline"> Add Group</span>
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
                    placeholder="Search Group..."
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
            <Row className=" boxShadow p-4 mb-4 justify-content-center">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
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
          </Container>
          <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={deleteGroup}
            DESCRIPTION="Confirm to Delete this group"
            DELETETITLE="group"
          />
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Send Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="groupName">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="body">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
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

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="groupname">
                <Form.Label>Group Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter group name"
                  value={groupname}
                  onChange={(e) => setGroupname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="emails">
                <Form.Label className="mt-2">Phone Numbers</Form.Label>
                <Select
                  isMulti
                  options={NumberOptions}
                  value={selectedphoneNumbers}
                  onChange={handleEmailChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#0077B2", border: "none" }}
                variant="primary"
                onClick={CreateGroup}
              >
                Add Group
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

export default Group;
