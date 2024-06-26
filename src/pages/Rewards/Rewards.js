import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BasicTable from "../../../src/components/TablePaginationComponent";
import BasicHeader from "../../../src/components/BasicHeader";
import { useGetRewardsQuery } from "../../redux/features/api/RewardsApi";
import Loader from "../../pages/loginForms/loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";

const Rewards = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const {
    data: getRewardsData,
    isLoading,
    refetch,
  } = useGetRewardsQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getRewardsData && getRewardsData.data) {
      setData(getRewardsData.data);
      setStartIndex(getRewardsData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getRewardsData.pagination.totalItems);
      setEndIndex(getRewardsData.pagination.endIndex);
      setTotalPages(getRewardsData.pagination.totalPages);
    }
  }, [getRewardsData, currentPage]);

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

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Gift Amount",
      accessor: "giftAmount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
              <BasicHeader HEADING="Rewards" />
            </Col>
          </Row>
          {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
          <Row className="  boxShadow p-3 mb-4  d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Rewards..."
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Rewards;
