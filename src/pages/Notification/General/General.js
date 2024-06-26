import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../../src/components/TablePaginationComponent";
import Header from "../../../../src/components/Header";
import Loader from ".././../../pages/loginForms/loader/Loader";
import {
  useGetNotificationQuery,
  useDeleteNotificationMutation,
} from "../../../redux/features/api/GeneralNotificationApi";
import { toast } from "react-toastify";
import DeleteModel from "../../../../src/components/DeleteModel";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";

const GeneralNotification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const {
    data: NotificationData,
    isLoading,
    refetch,
  } = useGetNotificationQuery({ page: currentPage, search: searchTerm });
  const [deleteNotificationApi] = useDeleteNotificationMutation();

  useEffect(() => {
    if (NotificationData && NotificationData.data) {
      setData(NotificationData.data);
      setStartIndex(NotificationData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(NotificationData.pagination.totalItems);
      setEndIndex(NotificationData.pagination.endIndex);
      setTotalPages(NotificationData.pagination.totalPages);
    }
  }, [NotificationData, currentPage]);

  console.log(NotificationData);

  const handleNavigateAddForm = () => navigate("/admin/add-general");

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

  const deleteNotification = async () => {
    try {
      const response = await deleteNotificationApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Title",
      accessor: "title",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Sub Title",
      accessor: "body",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (props) => {
        const imageUrl = props.value;
        return (
          <img
            src={imageUrl}
            alt="img"
            style={{ maxWidth: "50px", maxHeight: "50px" }}
          />
        );
      },
    },
    {
      Header: "Created Date",
      accessor: "createdAt.date",
      width: "auto",
      minWidth: 100,
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy");
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
        const formattedTime = format(parsedTime, "hh:mm a");
        return <span>{formattedTime}</span>;
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
      {!isLoading ? (
        <>
          <Container fluid className="my-4">
            <Row className="boxShadow p-4 mb-4 mt-4">
              <Col>
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING=" General Notification"
                  BUTTON_NAME="Add General"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            {/* <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " /> */}
            <Row className=" boxShadow p-3 mb-4  d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
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
            <Row className="justify-content-center  boxShadow p-4 mb-4 ">
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
            YES={deleteNotification}
            DESCRIPTION="Confirm to Delete this notification"
            DELETETITLE="Notification"
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GeneralNotification;
