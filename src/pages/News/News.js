import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdDelete, MdRefresh } from "react-icons/md";
import axios from "axios";
import Header from "../../../src/components/BasicHeader";
import Loader from "../../pages/loginForms/loader/Loader";
import {
  useGetNewsTableQuery,
  useDeleteNewsMutation,
} from "../../redux/features/api/NewsApi";
import { toast } from "react-toastify";
import DeleteModel from "../../../src/components/DeleteModel";
import Tablepagination from "../../../src/components/TablePaginationComponent";
import { format } from "date-fns";

const News = () => {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("");
  const [category, setCategory] = useState("");
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();

  const {
    data: newsTableData,
    isLoading: tableLoading,
    refetch,
  } = useGetNewsTableQuery(currentPage);
  const [deleteNewsApi] = useDeleteNewsMutation();
  const [refreshLoading, setRefreshLoading] = useState(false);

  useEffect(() => {
    if (newsTableData && newsTableData.data) {
      setData(newsTableData.data);
      setStartIndex(newsTableData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(newsTableData.pagination.totalItems);
      setEndIndex(newsTableData.pagination.endIndex);
      setTotalPages(newsTableData.pagination.totalPages);
    }
  }, [newsTableData, currentPage]);
  console.log(newsTableData);
  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteNews = async () => {
    try {
      const response = await deleteNewsApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!lang && !category) {
      toast.error("Please select both language and category.", {
        autoClose: 2000,
      });
      return;
    }

    if (!lang) {
      toast.error("Please select a language.", { autoClose: 2000 });
      return;
    }

    if (!category) {
      toast.error("Please select a category.", { autoClose: 2000 });
      return;
    }

    setRefreshLoading(true);
    await refetch();
    setRefreshLoading(false);
    try {
      const response = await axios.get(
        `https://api-trainsonwheels.onrender.com/news/addNewsInDB?category=${category}&lang=${lang}`
      );
      if (response?.data) {
        console.log(lang);
        console.log(category);
        console.log(response);
        toast.success(response?.data?.message, { autoClose: 1000 });
        setLang("");
        setCategory("");
        window.location.reload();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setLang("");
        setCategory("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Category",
      accessor: "category",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Language",
      accessor: "lang",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Image",
      accessor: "image",
    },
    {
      Header: "Published At",
      accessor: "publishedAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
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
      {!tableLoading ? (
        <>
          <Container fluid className="my-4">
            <Row className="boxShadow p-4 mb-4 mt-4">
              <Col>
                <Header
                  HEADING=" News"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
            <Row className="mb-3 boxShadow p-3 mb-4 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row ">
              <Col>
                <Form onSubmit={handleFormSubmit} onKeyPress={handleKeyPress}>
                  <Row className="mb-4 mt-4">
                    <Col xs={12} md={4} lg={3}>
                      <Form.Group controlId="language">
                        <Form.Label
                          className="text-dark"
                          style={{ fontWeight: "bolder" }}
                        >
                          Languages:
                        </Form.Label>
                        <Form.Select
                          value={lang}
                          onChange={(e) => setLang(e.target.value)}
                          className="mb-2"
                        >
                          <option value="" disabled>
                            Select Languages
                          </option>
                          <option value="ta">Tamil</option>
                          <option value="en">English</option>
                          <option value="te">Telugu</option>
                          <option value="hi">Hindi</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                      <Form.Group controlId="category">
                        <Form.Label
                          className="text-dark"
                          style={{ fontWeight: "bolder" }}
                        >
                          Categories:
                        </Form.Label>
                        <Form.Select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="mb-2"
                        >
                          <option value="" disabled>
                            Select Categories
                          </option>
                          <option value="general">General</option>
                          <option value="world">World</option>
                          <option value="nation">Nation</option>
                          <option value="business">Business</option>
                          <option value="technology">Technology</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="sports">Sports</option>
                          <option value="science">Science</option>
                          <option value="health">Health</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={3} className=" d-flex flex-column ">
                      <Button
                        style={{
                          backgroundColor: "#0077B2",
                          border: "none",
                          marginTop: "30px",
                          position: "relative",
                        }}
                        type="submit"
                        disabled={refreshLoading}
                      >
                        <MdRefresh
                          size={25}
                          style={{
                            marginRight: "0px",
                            animation: refreshLoading
                              ? "spin 1s linear infinite"
                              : "none",
                          }}
                          className="justify-content-center align-items-center "
                        />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row className="justify-content-center  boxShadow p-4 mb-4">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
                <Tablepagination
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
            YES={deleteNews}
            DESCRIPTION="Confirm to Delete this News"
            DELETETITLE="News"
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default News;
