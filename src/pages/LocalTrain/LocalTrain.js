import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../../src/components/TablePaginationComponent";
import Header from "../../../src/components/Header";
import {
  useGetChennaiLocalSearchQuery,
  useDeleteLocalTrainMutation,
} from "../../redux/features/api/LocalTrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import DeleteModel from "../../../src/components/DeleteModel";
import Select from "react-select";
import { BsSearch, BsX } from "react-icons/bs";

const Train = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [selectedCity, setSelectedCity] = useState({
    value: "chennai",
    label: "Chennai",
  });
  const [search, setSearch] = useState("");
  const { data: getLocalTrainData, isLoading } = useGetChennaiLocalSearchQuery({
    page: currentPage,
    city: selectedCity.value,
    search: search,
    id: idToDelete,
  });
  const navigate = useNavigate();
  const [deleteLocalTrain] = useDeleteLocalTrainMutation();

  const handleNavigateAddForm = () => navigate(`/admin/add-localtrain`);

  useEffect(() => {
    if (getLocalTrainData && getLocalTrainData.data) {
      setData(getLocalTrainData.data);
      setStartIndex(getLocalTrainData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getLocalTrainData.pagination.totalItems);
      setEndIndex(getLocalTrainData.pagination.endIndex);
      setTotalPages(getLocalTrainData.pagination.totalPages);
    }
  }, [getLocalTrainData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setSearch("");
  }, [selectedCity]);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteTrain = async () => {
    try {
      const response = await deleteLocalTrain({
        city: selectedCity.value,
        id: idToDelete,
      });
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setDeleteShow(false);
        setIdToDelete("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setDeleteShow(false);
        setIdToDelete("");
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
      Header: "Train No",
      accessor: "trainNo",
    },
    {
      Header: "Train Name",
      accessor: "trainName",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "Updated On",
      accessor: "updatedOn",
    },
    {
      Header: "From",
      accessor: "from",
    },
    {
      Header: "Departure",
      accessor: "departure",
    },
    {
      Header: "To",
      accessor: "to",
    },
    {
      Header: "Arrival",
      accessor: "arrival",
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "Distance",
      accessor: "distance",
    },
    {
      Header: "Speed",
      accessor: "speed",
    },
    {
      Header: "Halts",
      accessor: "halts",
    },
    {
      Header: "sClasses",
      accessor: "sClasses",
    },
    {
      Header: "sRunsOn",
      accessor: "sRunsOn",
    },
    {
      Header: "Train ID",
      accessor: "trainID",
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;

        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Link to={`/admin/edit-localtrain/:${rowIdx}`}>
              <Button variant="warning">
                <FaEdit />
              </Button>
            </Link>
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
        <Container fluid className="mt-3 ">
          <Row className="boxShadow p-4 mb-4">
            <Col>
              <Header
                ONCLICK={handleNavigateAddForm}
                HEADING="Local Trains"
                BUTTON_NAME="Add Local Train"
              />
            </Col>
          </Row>
          {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
          <Row className="mb-4 boxShadow p-4 ">
            <Form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column flex-md-row align-items-md-center justify-content-start"
            >
              <Col xs={12} md={4} lg={3} className="m-2">
                <Form.Group controlId="city">
                  <Form.Label className="fs-4">Select City:</Form.Label>
                  <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    options={[
                      { value: "chennai", label: "Chennai" },
                      { value: "delhi", label: "Delhi" },
                      { value: "pune", label: "Pune" },
                      { value: "kolkata", label: "Kolkata" },
                      { value: "mumbai", label: "Mumbai" },
                      { value: "hyderabad", label: "Hyderabad" },
                    ]}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={3} className="m-2">
                <Form.Group controlId="search" className="position-relative">
                  <Form.Label className="fs-4">Search:</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <BsSearch />
                    </span>
                    <Form.Control
                      type="text"
                      value={search}
                      onChange={handleSearchChange}
                      placeholder="Search LocalTrain"
                    />
                    {search && (
                      <span
                        className="input-group-text"
                        onClick={() => setSearch("")}
                      >
                        <BsX style={{ cursor: "pointer" }} />
                      </span>
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Form>
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
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteTrain}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Train"
        DELETETITLE="Local Train"
      />
    </div>
  );
};

export default Train;
