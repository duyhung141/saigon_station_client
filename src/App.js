import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menupage from "./pages/Menupage/Menupage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/menu" element={<Menupage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
