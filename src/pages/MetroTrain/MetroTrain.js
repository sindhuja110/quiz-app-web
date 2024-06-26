import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../Components/TablePaginationComponent";
import Header from "../../Components/Header";
import {
  useDeleteMetroTrainMutation,
  useGetChennaiMetroSearchQuery,
} from "../../redux/features/api/MetroTrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import DeleteModel from "../../Components/DeleteModel";
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
    value: "Chennai",
    label: "Chennai",
  });
  const [search, setSearch] = useState("");
  const { data: getMetroTrainData, isLoading } = useGetChennaiMetroSearchQuery({
    page: currentPage,
    city: selectedCity.value,
    search: search,
    id: idToDelete,
  });
  const [deleteMetroTrain] = useDeleteMetroTrainMutation();

  const navigate = useNavigate();

  const handleNavigateAddForm = () => navigate(`/admin/add-metrotrain`);

  useEffect(() => {
    if (getMetroTrainData && getMetroTrainData.data) {
      setData(getMetroTrainData.data);
      setStartIndex(getMetroTrainData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getMetroTrainData.pagination.totalItems);
      setEndIndex(getMetroTrainData.pagination.endIndex)
      setTotalPages(getMetroTrainData.pagination.totalPages);

    }
  }, [getMetroTrainData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setSearch("");
  }, [selectedCity]);

  console.log(getMetroTrainData);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const deleteMetro = async () => {
    try {
      const response = await deleteMetroTrain({
        city: selectedCity.value,
        id: idToDelete,
      });
      console.log(idToDelete);
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        setDeleteShow(false);
        setIdToDelete("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
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
      Header: "Route",
      accessor: "route",
    },
    {
      Header: "Day",
      accessor: "day",
    },
    {
      Header: "Source",
      accessor: "source",
    },
    {
      Header: "Destination",
      accessor: "destination",
    },
    {
      Header: "Via",
      accessor: "via",
    },
    {
      Header: "First Train",
      accessor: "first_train",
    },
    {
      Header: "Last Train",
      accessor: "last_train",
    },
    {
      Header: "Timing 1",
      accessor: "timing1",
    },
    {
      Header: "Timing1 Train Frequency",
      accessor: "timing1_train_frequency",
    },
    {
      Header: "Timing 2",
      accessor: "timing2",
    },
    {
      Header: "Timing2 Train Frequency",
      accessor: "timing2_train_frequency",
    },
    {
      Header: "Timing 3",
      accessor: "timing3",
    },
    {
      Header: "Timing3 Train Frequency",
      accessor: "timing3_train_frequency",
    },
    {
      Header: "Additional Data",
      accessor: "additional_data",
    },

    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;

        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Link to={`/admin/edit-metrotrain/:${rowIdx}`}>
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
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4">
            <Col>
            <Header
              ONCLICK={handleNavigateAddForm}
              HEADING="Metro Trains"
              BUTTON_NAME="Add Metro Train"
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
                      { value: "Chennai", label: "Chennai" },
                      { value: "Mumbai", label: "Mumbai" },
                      { value: "Kolkata", label: "Kolkata" },
                      { value: "Pune", label: "Pune" },
                      { value: "Delhi", label: "Delhi" },
                      { value: "Ahmedabad", label: "Ahmedabad" },
                      { value: "Jaipur", label: "Jaipur" },
                      { value: "Nagpur", label: "Nagpur" },
                      { value: "Noida", label: "Noida" },
                      { value: "Bangalore", label: "Bangalore" },
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
                      placeholder="Search MetroTrain"
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
        YES={deleteMetro}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Train"
        DELETETITLE="Train"
      />
    </div>
  );
};

export default Train;
