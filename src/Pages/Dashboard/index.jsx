import "./slick.css";
import "./slick-theme.css";
import Login from "../../Components/SignUp/Login";
import DashboardComp from "./DashboardComp";

const Dashboard = () => {
  const AuthToken = localStorage.getItem("cflToken");


  return <>{AuthToken ? <DashboardComp /> : <Login />}</>;
};

export default Dashboard;
