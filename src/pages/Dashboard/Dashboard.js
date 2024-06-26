import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGetDashboardQuery } from "../../redux/features/api/DashboardApi";
import Loader from "../Loader/Loader";
import TableComponents from "../../Components/TableComponent";
import { Link } from "react-router-dom";
import { PiUserListBold } from "react-icons/pi";
import { MdFeedback } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaTrainSubway } from "react-icons/fa6";
import { GiRailway } from "react-icons/gi";
import { PiTrainRegionalFill } from "react-icons/pi";
import { format } from "date-fns";





const Dashboard = () => {
  const { data, error, isLoading } = useGetDashboardQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const {
    totalUsers,
    totalFeedbacks,
    totalWithdrawRequests,
    totalTrains,
    totalStations,
    totallyMetroTrains,
    users = [],
    withdrawRequests = [],
  } = data;

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Referral Id",
      accessor: "referralId",
    },
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

  const COLUMNSS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi Id ",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
    },
    {
      Header: "Status ",
      accessor: "status",
    },
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

  return (
    <Container fluid>
      <Row className="mt-4 mx-2">
        <Col className="boxShadow p-4">
          <h4 className="fs-4 fw-bolder">Dashboard</h4>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/user-list" className="link-unstyled">
            <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <PiUserListBold size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Users Count</div>
                  <h3 className="fs-8 fw-bolder">{totalUsers}</h3>
                  <div className="fs-14">Total Number of Users</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/feedback" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <MdFeedback size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Feedback Count</div>
                  <h3 className="fs-8 fw-bolder">{totalFeedbacks}</h3>
                  <div className="fs-14">Total Number of Feedbacks</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/withdraw-request" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <BiMoneyWithdraw size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Withdraw Requests</div>
                  <h3 className="fs-8 fw-bolder">{totalWithdrawRequests}</h3>
                  <div className="fs-14">Total Number of Requests</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/train" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <FaTrainSubway size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Trains</div>
                  <h3 className="fs-8 fw-bolder">{totalTrains}</h3>
                  <div className="fs-14">Total Number of Trains</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/station" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <GiRailway size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Stations</div>
                  <h3 className="fs-8 fw-bolder">{totalStations}</h3>
                  <div className="fs-14">Total Number of Stations</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/metro-train" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <PiTrainRegionalFill size={45} style={{color:"0077B2"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Metro Trains</div>
                  <h3 className="fs-8 fw-bolder">{totallyMetroTrains}</h3>
                  <div className="fs-14">Total Number of Metro Trains</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={6} lg={12} className="mb-3">
        <p className="p-3 boxShadow">
            <h4 className="fs-4 mb-4 fw-bolder text-start">New User Join</h4>
          
              <TableComponents COLUMNS={COLUMNS} MOCK_DATA={users} />
            
          </p>
        </Col>

        <Col xs={12} md={6} lg={12} className="mb-3">
        <p className="p-3 boxShadow">
            <h4 className="fs-4 mb-4 fw-bolder text-start">New Withdraw Request</h4>
          
              <TableComponents COLUMNS={COLUMNSS} MOCK_DATA={withdrawRequests} />
           
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
