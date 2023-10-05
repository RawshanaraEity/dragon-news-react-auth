import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import Navbar from "../shared/navbar/Navbar";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;