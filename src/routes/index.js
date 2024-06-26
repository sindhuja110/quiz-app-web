import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import { Quizkids } from "../pages/QuizWebsite/QuizKids/Quizkids";




const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <GuestGuard>
            <Quizkids/>
            </GuestGuard>
          ),
        },
       
        {
          path: "/login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        // {
        //   path: "/privacy-policy",
        //   element: (
        //     <GuestGuard>
        //       <PrivacyPolicy />
        //     </GuestGuard>
        //   ),
        // },
        // {
        //   path: "/terms-use",
        //   element: (
        //     <GuestGuard>
        //       <TermUse />
        //     </GuestGuard>
        //   ),
        // },
      
        
        
        {
          path: "/about-us",
          element: (
            <GuestGuard>
              <AboutUs />
            </GuestGuard>
          ),
        },
        {
          path: "/faq",
          element: (
            <GuestGuard>
              <Faq />
            </GuestGuard>
          ),
        },
      
       
        
      
      ],
    },
    {
      path: "/admin",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "train",
          element: (
            <AuthGuard>
              <Train />
            </AuthGuard>
          ),
        },
        {
          path: "station",
          element: (
            <AuthGuard>
              <Station />
            </AuthGuard>
          ),
        },
        {
          path: "user-list",
          element: (
            <AuthGuard>
              <TrainInfo />
            </AuthGuard>
          ),
        },
        {
          path: "dashboard",
          element: (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ),
        },
        {
          path: "general",
          element: (
            <AuthGuard>
              <General />
            </AuthGuard>
          ),
        },
        {
          path: "feedback",
          element: (
            <AuthGuard>
              <FeedBack />
            </AuthGuard>
          ),
        },
        {
          path: "settings",
          element: (
            <AuthGuard>
              <Setting />
            </AuthGuard>
          ),
        },
        {
          path: "add-train",
          element: (
            <AuthGuard>
              <AddTrain />
            </AuthGuard>
          ),
        },
        {
          path: "edit-train/:id",
          element: (
            <AuthGuard>
              <EditTrain />
            </AuthGuard>
          ),
        },
        {
          path: "transaction-history",
          element: (
            <AuthGuard>
              <TransactionHistory />
            </AuthGuard>
          ),
        },
        {
          path: "withdraw-request",
          element: (
            <AuthGuard>
              <WithdrawRequest />
            </AuthGuard>
          ),
        },
        {
          path: "add-general",
          element: (
            <AuthGuard>
              <AddGeneral />
            </AuthGuard>
          ),
        },
        {
          path: "add-station",
          element: (
            <AuthGuard>
              <AddStation />
            </AuthGuard>
          ),
        },
        {
          path: "edit-station/:id",
          element: (
            <AuthGuard>
              <EditStation />
            </AuthGuard>
          ),
        },
        {
          path: "adduser-list",
          element: (
            <AuthGuard>
              <AddUserList />
            </AuthGuard>
          ),
        },
        {
          path: "issue",
          element: (
            <AuthGuard>
              <Issue />
            </AuthGuard>
          ),
        },
        {
          path: "edit-issue",
          element: (
            <AuthGuard>
              <EditIssue />
            </AuthGuard>
          ),
        },
        {
          path: "group",
          element: (
            <AuthGuard>
              <Group />
            </AuthGuard>
          ),
        },
        {
          path: "individual",
          element: (
            <AuthGuard>
              <Individual />
            </AuthGuard>
          ),
        },
        {
          path: "news",
          element: (
            <AuthGuard>
              <News />
            </AuthGuard>
          ),
        },
        {
          path: "group-notification",
          element: (
            <AuthGuard>
              <GroupNotification />
            </AuthGuard>
          ),
        },
        {
          path: "local-train",
          element: (
            <AuthGuard>
              <LocalTrain />
            </AuthGuard>
          ),
        },
        {
          path: "metro-train",
          element: (
            <AuthGuard>
              <MetroTrain />
            </AuthGuard>
          ),
        },
        {
          path: "add-localtrain",
          element: (
            <AuthGuard>
              <AddLocalTrain />
            </AuthGuard>
          ),
        },
        {
          path: "add-metrotrain",
          element: (
            <AuthGuard>
              <AddMetroTrain />
            </AuthGuard>
          ),
        },
        {
          path: "edit-localtrain/:id",
          element: (
            <AuthGuard>
              <EditLocalTrain />
            </AuthGuard>
          ),
        },
        {
          path: "edit-metrotrain/:id",
          element: (
            <AuthGuard>
              <EditMetroTrain />
            </AuthGuard>
          ),
        },
        {
          path: "add-transaction",
          element: (
            <AuthGuard>
              <AddTransactionHistory />
            </AuthGuard>
          ),
        },
        {
          path: "ratings",
          element: (
            <AuthGuard>
              <Ratings />
            </AuthGuard>
          ),
        },
        {
          path: "rewards",
          element: (
            <AuthGuard>
              <Rewards />
            </AuthGuard>
          ),
        },
        {
          path: "premium-user",
          element: (
            <AuthGuard>
              <PremiumUser />
            </AuthGuard>
          ),
        },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

const Login = Loadable(lazy(() => import("../pages/loginForms/Login")));
const DashboardLayout = Loadable(
  lazy(() => import("../pages/Dashboard/DashboardLayout"))
);
const TrainInfo = Loadable(lazy(() => import("../pages/Userlist/UserList")));
const Train = Loadable(lazy(() => import("../pages/Train/Train")));
const Station = Loadable(lazy(() => import("../pages/Station/Station")));
const General = Loadable(
  lazy(() => import("../pages/Notification/General/General"))
);
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const FeedBack = Loadable(lazy(() => import("../pages/FeedBack/FeedBack")));
const Setting = Loadable(lazy(() => import("../pages/Setting page/Setting")));
const AddTrain = Loadable(lazy(() => import("../pages/Train/AddTrain")));
const EditTrain = Loadable(lazy(() => import("../pages/Train/EditTrain")));
const TransactionHistory = Loadable(
  lazy(() => import("../pages/TransactionHistory/TransactionHistory"))
);
const AddTransactionHistory = Loadable(
  lazy(() => import("../pages/TransactionHistory/AddTransactionHistory"))
);
const WithdrawRequest = Loadable(
  lazy(() => import("../pages/WithdrawRequest/WithdrawRequest"))
);
const AddGeneral = Loadable(
  lazy(() => import("../pages/Notification/General/AddGeneralNotification"))
);
const AddStation = Loadable(lazy(() => import("../pages/Station/AddStation")));
const EditStation = Loadable(
  lazy(() => import("../pages/Station/EditStation"))
);
const AddUserList = Loadable(
  lazy(() => import("../pages/Userlist/AddUserList"))
);
const Issue = Loadable(lazy(() => import("../pages/Issue/Issue")));
const EditIssue = Loadable(lazy(() => import("../pages/Issue/EditIssue")));
const Group = Loadable(lazy(() => import("../pages/Notification/Group/Group")));
const GroupNotification = Loadable(
  lazy(() => import("../pages/Notification/Group/GroupNotification"))
);
const Individual = Loadable(
  lazy(() => import("../pages/Notification/Individual/Individual"))
);
const News = Loadable(lazy(() => import("../pages/News/News")));
const LocalTrain = Loadable(
  lazy(() => import("../pages/LocalTrain/LocalTrain"))
);
const AddLocalTrain = Loadable(
  lazy(() => import("../pages/LocalTrain/AddLocalTrain"))
);
const EditLocalTrain = Loadable(
  lazy(() => import("../pages/LocalTrain/EditLocalTrain"))
);
const MetroTrain = Loadable(
  lazy(() => import("../pages/MetroTrain/MetroTrain"))
);
const AddMetroTrain = Loadable(
  lazy(() => import("../pages/MetroTrain/AddMetroTrain"))
);
const EditMetroTrain = Loadable(
  lazy(() => import("../pages/MetroTrain/EditMetroTrain"))
);
const Ratings = Loadable(lazy(() => import("../pages/Rating/Ratings")));
const Rewards = Loadable(lazy(() => import("../pages/Rewards/Rewards")));
const PremiumUser = Loadable(
  lazy(() => import("../pages/PremiumUser/PremiumUser"))
);
// const TrainsOnWheels = Loadable(
//   lazy(() => import("../pages/TrainWebsite/TrainsOnWheels/TrainsOnWheels"))
// );
// const PrivacyPolicy = Loadable(
//   lazy(() => import("../pages/TrainWebsite/PrivacyPolicy"))
// );
// const TermsUse = Loadable(lazy(() => import("../pages/TrainWebsite/TermsUse")));
// const PnrStatus = Loadable(
//   lazy(() => import("../pages/TrainWebsite/PnrStatus/PnrStatus"))
// );

// website routes

const AboutUs = Loadable(
  lazy(() => import("../pages/QuizWebsite/aboutUs"))
);
const Faq = Loadable(lazy(() => import("../pages/QuizWebsite/faqPage")));
// const Fare = Loadable(
//   lazy(() => import("../pages/TrainWebsite/FareCalculator/Fare"))
// );
// const FareComparison = Loadable(
//   lazy(() => import("../pages/TrainWebsite/FareComparison/FareComparison"))
// );
// const SeatAvailability = Loadable(
//   lazy(() => import("../pages/TrainWebsite/SeatAvailability/SeatAvailability"))
// );
// const Advertisement = Loadable(
//   lazy(() => import("../pages/TrainWebsite/Advertisement/Advertisement"))
// );
const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
