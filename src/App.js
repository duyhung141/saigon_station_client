import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menupage from "./pages/Menupage/Menupage";
import Header from "./components/Header/Header";
import GetInTouchPage from "./pages/GetInTouchPage/GetInTouchPage";
import Footer from "./components/Footer/Footer";
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
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
