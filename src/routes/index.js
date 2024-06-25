import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import HomeLayout from "../pages/Layout/HomeLayout";
import RentLayout from "../pages/Rent/RentLayout";
import RefurbishedLayout from "../pages/Refurbished/RefurbishedLayout";
import DashboardLayout from "../pages/Admin/Dashboard/DashboardLayout";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <GuestGuard>
          <HomeLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: "/",
          element: (
            <GuestGuard>
              <Home />
            </GuestGuard>
          ),
        },
        {
          path: "/rent",
          element: (
            <GuestGuard>
              <RentLayout />
            </GuestGuard>
          ),
          children: [
            {
              path: "/rent",
              element: (
                <GuestGuard>
                  <Rent />
                </GuestGuard>
              ),
            },
            {
              path: "/rent/rent-details",
              element: (
                <GuestGuard>
                  <RentDetails />
                </GuestGuard>
              ),
            },
          ],
        },
        {
          path: "/refurbished",
          element: (
            <GuestGuard>
              <RefurbishedLayout />
            </GuestGuard>
          ),
          children: [
            {
              path: "/refurbished",
              element: (
                <GuestGuard>
                  <Refurbished />
                </GuestGuard>
              ),
            },
            {
              path: "/refurbished/refurbished-details",
              element: (
                <GuestGuard>
                  <RefurbishedDetails />
                </GuestGuard>
              ),
            },
          ],
        },
        {
          path: "/aboutUs",
          element: (
            <GuestGuard>
              <AboutUs />
            </GuestGuard>
          ),
        },
        {
          path: "/contactUs",
          element: (
            <GuestGuard>
              <ContactUs />
            </GuestGuard>
          ),
        },
        {
          path: "/privacy-policy",
          element: (
            <GuestGuard>
              <PrivacyPolicy />
            </GuestGuard>
          ),
        },
        {
          path: "/terms-conditions",
          element: (
            <GuestGuard>
              <TermsAndCondition />
            </GuestGuard>
          ),
        },
        {
          path: "/reviews",
          element: (
            <GuestGuard>
              <Reviews />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: "admin",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "/admin/user-list",
          element: (
            <AuthGuard>
              <UserList />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/transactions",
          element: (
            <AuthGuard>
              <Transactions />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/review",
          element: (
            <AuthGuard>
              <Review />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/devices",
          element: (
            <AuthGuard>
              <Devices />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/dashboard",
          element: (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/issues",
          element: (
            <AuthGuard>
              <Issues />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/categories",
          element: (
            <AuthGuard>
              <Categories />
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
const Home = Loadable(
  lazy(() => import("../pages/LandingSections/LandingSections"))
);
const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
const Rent = Loadable(lazy(() => import("../pages/Rent/Rent")));
const Reviews = Loadable(lazy(() => import("../pages/Review/Review")));
const TermsAndCondition = Loadable(
  lazy(() => import("../pages/T&C/TermsAndCondition"))
);
const PrivacyPolicy = Loadable(
  lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"))
);
const AboutUs = Loadable(lazy(() => import("../pages/AboutUs/AboutUs")));
const ContactUs = Loadable(lazy(() => import("../pages/ContactUs/ContactUs")));
const Refurbished = Loadable(
  lazy(() => import("../pages/Refurbished/Refurbished"))
);
const RentDetails = Loadable(lazy(() => import("../pages/Rent/RentDetails")));
const RefurbishedDetails = Loadable(
  lazy(() => import("../pages/Refurbished/RefurbishedDetails"))
);
/* Admin routes */
const Login = Loadable(lazy(() => import("../pages/Admin/LoginForms/Login")));
const UserList = Loadable(
  lazy(() => import("../pages/Admin/UserList/UserList"))
);
const Transactions = Loadable(
  lazy(() => import("../pages/Admin/Transactions/Transactions"))
);
const Review = Loadable(lazy(() => import("../pages/Admin/Reviewss/Reviews")));
const Devices = Loadable(lazy(() => import("../pages/Admin/Devices/Devices")));
const Dashboard = Loadable(
  lazy(() => import("../pages/Admin/Dashboard/Dashboard"))
);
const Issues = Loadable(lazy(() => import("../pages/Admin/Issues/Issues")));
const Categories = Loadable(
  lazy(() => import("../pages/Admin/Categories/Categories"))
);
