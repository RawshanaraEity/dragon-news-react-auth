import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNavBar from "../shared/leftSideNavbar/LeftSideNavBar";
import Navbar from "../shared/navbar/Navbar";
import RightSideNavbar from "../shared/rightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
           <div className="border">
                <LeftSideNavBar></LeftSideNavBar>
            </div>
            {/* news container */}
            <div className="md:col-span-2 border"> 
              {
                news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
              }
            </div>
            <div className="border">
                <RightSideNavbar></RightSideNavbar>
            </div>
           </div>
        </div>
    );
};

export default Home;