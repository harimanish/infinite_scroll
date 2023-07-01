import { useState } from "react";
import Layout from "../Layout";
import InfiniteScrollList from "../components/InfiniteScrollList";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
        <Layout>
            <div>
                <InfiniteScrollList />
            </div>
            {showScroll && (
                <div
                    className="fixed bottom-4 right-4 cursor-pointer text-blue-gray-600"
                    onClick={scrollTop}
                >
                    <FaArrowUp size={24} />
                </div>
            )}
        </Layout>
    );
};

export default Home;
