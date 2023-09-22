import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import AdvisorProfile from "../Components/AdvisorProfile";

import EditAdvisorProfile from "../Components/EditAdvisorProfile/Index";
import SignUp from "../Components/SignUp";
import Message from "../Components/Message/Message";
import Notification from "../Pages/Notifications";
import ForAdvisors from "../Pages/ForAdvisors";
import MyProfile from "../Pages/MyProfile";
import NewGoal from "../Pages/NewGoal";
import SearchAdvisors from "../Pages/SearchAdvisors";
import FAQ from "../Pages/FAQ";
import InvestorProfile from "../Pages/InvestorProfile";
import Objectives from "../Pages/Objectives";
import ForCompanies from "../Pages/ForCompanies";
import Login from "../Components/SignUp/Login";
import Dashboard from "../Pages/Dashboard";
import Subscribe from "../Pages/Subscribe";
import Onboarding from "../Components/SignUp/FounderOnboarding/";
import Blog from "../Pages/Blog";
import ResetPassword from "../Components/SignUp/ResetPassword";

const PrivateRoute = ({ auth, children }) => {
  console.log(auth);
  return auth ? children : <Navigate to="/login" />;
};

const Router = () => {
  const auth = localStorage.getItem("cflToken");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/companies" element={<ForCompanies />} />
        <Route exact path="/advisors" element={<ForAdvisors />} />

        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password-reset/" element={<ResetPassword />} />
        <Route exact path="/password-reset?:id/:token" element={<ResetPassword />} />

        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route exact path="/message" element={<Message />} />
        <Route exact path="/notifications" element={<Notification />} />
        <Route exact path="/goal" element={<NewGoal />} />
        <Route exact path="/objectives" element={<Objectives />} />
        <Route exact path="/search-advisor" element={<SearchAdvisors />} />
        <Route exact path="/edit-profile" element={<MyProfile />} />
        <Route exact path="/advisor-profile" element={<AdvisorProfile />} />
        <Route exact path="/advisor-profile/:id" element={<AdvisorProfile />} />
        <Route exact path="/search-advisor" element={<SearchAdvisors />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/founder-profile" element={<InvestorProfile />} />
        
        <Route exact path="/edit-advisor" element={<EditAdvisorProfile />} />
      
        {/* <Route exact path="/companies" element={<PrivateRoute auth={auth}><ForCompanies /></PrivateRoute>} />
        <Route exact path="/advisors" element={<PrivateRoute auth={auth}><ForAdvisors /></PrivateRoute>} />

        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password-reset/" element={<ResetPassword />} />
        <Route exact path="/password-reset?:id/:token" element={<ResetPassword />} />

        <Route exact path="/onboarding" element={<PrivateRoute auth={auth}><Onboarding /></PrivateRoute>} />
        <Route exact path="/subscribe" element={<PrivateRoute auth={auth}><Subscribe /></PrivateRoute>} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route exact path="/message" element={<PrivateRoute auth={auth}><Message /></PrivateRoute>} />
        <Route exact path="/notifications" element={<PrivateRoute auth={auth}><Notification /></PrivateRoute>} />
        <Route exact path="/goal" element={<PrivateRoute auth={auth}><NewGoal /></PrivateRoute>} />
        <Route exact path="/objectives" element={<PrivateRoute auth={auth}><Objectives /></PrivateRoute>} />
        <Route exact path="/search-advisor" element={<PrivateRoute auth={auth}><SearchAdvisors /></PrivateRoute>} />
        <Route exact path="/edit-profile" element={<PrivateRoute auth={auth}><MyProfile /></PrivateRoute>} />
        <Route exact path="/advisor-profile" element={<PrivateRoute auth={auth}><AdvisorProfile /></PrivateRoute>} />
        <Route exact path="/advisor-profile/:id" element={<PrivateRoute auth={auth}><AdvisorProfile /></PrivateRoute>} />
        <Route exact path="/search-advisor" element={<PrivateRoute auth={auth}><SearchAdvisors /></PrivateRoute>} />
        <Route exact path="/blog" element={<PrivateRoute auth={auth}><Blog /></PrivateRoute>} />
        <Route exact path="/faq" element={<PrivateRoute auth={auth}><FAQ /></PrivateRoute>} />
        <Route exact path="/founder-profile" element={<PrivateRoute auth={auth}><InvestorProfile /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
