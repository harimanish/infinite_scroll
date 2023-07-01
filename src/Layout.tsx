import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/home";
    return (
        <>
            <NavBar />
            <div>{children}</div>
            {!isHomePage && <Footer />}
        </>
    );
};

export default Layout;
