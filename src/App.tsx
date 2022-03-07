import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import { UsersCard } from "./Components/UsersCard/UsersCard";
import NoResultsPage from "./Pages/NoResultsPage/NoResultsPage";
import WalletCard from "./Components/WalletCard/WalletCard";
import Faq from "./Components/Faq/Faq";
import Searchbar from "./Components/Searchbar/Searchbar";
import Dropdown from "./Components/Dropdown/Dropdown";
import Carosel from "./Components/Bidcard/Carosel";
import { NotificationD } from "./Components/Notification/NotificationD";
import Upload from "./Pages/Upload/Upload";
import { CradCollection } from "./Components/CardCollection/CradCollection";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SingleCollectible from "./Pages/SingleCollectible/Singlecollectible";
import Activity from "./Pages/Activity/Activity";
import CurrentBid from "./Components/CurrentBid/CurrentBid";
import SearchFilter from "./Components/SearchFilterPage/SearchFilter";
import Modals from "./Components/Modals/Modals";
import DilogueBox from "./Components/DilogueBox/DilogueBox";
import Item from "./Components/Item/Item";
import BidCarousel from "./Components/CurrentBid/BidCarousel";
import SearchfilterCloned from "./Components/SearchFilterPage/SearchfilterCloned";
const App: React.FC = () => {
  return (
    <div className="xyz">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route
          path="/slider"
          element={<SliderComponent value={0} children={[]} />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item" element={<Item />} />
        <Route path="/walletcard" element={<WalletCard ETH={10.78} />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="UsersCard" element={<UsersCard />} />
        <Route path="NoResultsPage" element={<NoResultsPage />} />
        <Route path="/SingleCollectible" element={<SingleCollectible />} />
        <Route path="searchbar" element={<Searchbar />} />
        {/* <Route path="dropdown" element={<Dropdown />} /> */}
        <Route path="carosel" element={<Carosel />} />
        <Route path="followersCard" element={<FollowersCard />} />
        <Route path="/NotificationDisplay" element={<NotificationD />} />
        <Route path="/uploadPage" element={<Upload />} />
        <Route path="/CardCollection" element={<CradCollection />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
<<<<<<< HEAD
        <Route path="/homepage" element={<BidCarousel />} />
        <Route path="/searchcloned" element={<SearchfilterCloned />} />
=======
        <Route path="/currentbid" element={<CurrentBid />} />
        <Route
          path="/modals"
          element={<Modals smalltext1={""} smalltext2={""} smalltext3={""} />}
        />
        <Route path="/DilogueBox" element={<DilogueBox />} />
>>>>>>> 414d839fd68a631cfe84a97e03fa2d3716ee1a43
      </Routes>
    </div>
  );
};

export default App;
