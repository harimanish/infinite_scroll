import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
const PrivateRoutes = () => {
    const { isLogged } = useContext(AuthContext);
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
