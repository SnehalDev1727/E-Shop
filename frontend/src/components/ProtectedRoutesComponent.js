import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutesComponent = ({ admin }) => {

  if (admin) {
    let adminAuth = true;
    // if (adminAuth) auth = true;
    return adminAuth ? <Outlet/>:<Navigate to="/login"/>
  } else {
    let userAuth = true;
    return userAuth ? <Outlet/>:<Navigate to="/login"/>
  }

};

export default ProtectedRoutesComponent;

