import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BasicTable from "../../Components/TablePaginationComponent";
import BasicHeader from "../../Components/BasicHeader";
import { useGetPremiumUserQuery } from "../../redux/features/api/PremiumUserApi";
import Loader from "../../pages/loginForms/loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";

const PremiumUser = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [isSearching, setIsSearching] = useState(false);
  const { data: getPremiumUserData, isLoading ,refetch } = useGetPremiumUserQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getPremiumUserData && getPremiumUserData.data) {
      setData(getPremiumUserData.data);
      setStartIndex(getPremiumUserData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getPremiumUserData.pagination.totalItems);
      setEndIndex(getPremiumUserData.pagination.endIndex)
      setTotalPages(getPremiumUserData.pagination.totalPages);
    }
  }, [getPremiumUserData, currentPage]);

console.log(getPremiumUserData);
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
      accessor:"s_no",
    },
    {
      Header: "Phone Number",
      accessor: "entity.contact",
    },
    {
      Header: "Amount",
      accessor: (row) => row.entity.amount / 100,
    },
    
    {
      Header: "Transaction ID",
      accessor: "entity.id",
    },
    {
      Header: "Payment Mode",
      accessor: "entity.method",
    },
    {
      Header: "Premium Starts",
      accessor:"createdAt",
      Cell: ({ value }) => {
            const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
            return <span>{formattedDateTime}</span>;
          },
    },
    {
        Header: "Premium Expiration",
        accessor: "expiresAt",
        Cell: ({ value }) => {
            const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
            return <span>{formattedDateTime}</span>;
          },
      },
    //   {
    //     Header: "Type",
    //     accessor: "type",
    //   },
    // {
    //   Header: 'Created At',
    //   accessor: 'createdAt',
    //   Cell: ({ value }) => {
    //     const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
    //     return <span>{formattedDateTime}</span>;
    //   },
    // },
   
   
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
            <BasicHeader HEADING="Premium User" />
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
                  placeholder="Search PremiumUser..."
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

export default PremiumUser;
