import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menupage from "./pages/Menupage/Menupage";
import Header from "./components/Header/Header";
import GetInTouchPage from "./pages/GetInTouchPage/GetInTouchPage";
import Footer from "./components/Footer/Footer";
import EventPage from "./pages/EventPage/EventPage";
import EventDetailPage from "./pages/EventPage/EventDetailPage";
import Sidebar from "./components/Sidebar/Sidebar";
// import {Link} from "react-router-dom";
function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/menu" element={<Menupage/>}/>
                    <Route path="/contact" element={<GetInTouchPage/>}/>
                    <Route path="/event" element={<EventPage/>}/>
                    <Route path="/event/id" element={<EventDetailPage/>}/>
                    <Route path="/sidebar" element={<Sidebar/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
