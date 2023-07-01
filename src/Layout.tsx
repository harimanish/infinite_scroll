import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
