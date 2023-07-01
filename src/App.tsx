import { Route, Routes } from "react-router-dom";
import Login from "./pages/LogIn";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/Auth.context";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
