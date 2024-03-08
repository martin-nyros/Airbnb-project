import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Carousels from "./Components/Carousels";
import CardImage from "./Components/CardImages/CardImage";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import Detailspage from "./Components/details/Detailspage";
import Routing from "./Routing";
import TopBar from "./Components/Onlineexperience/TopBar";
import NewWeek from "./Components/Onlineexperience/NewWeek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonCarousel from "./Components/Onlineexperience/ButtonCarousel";
import OnlineCards from "./Components/Onlineexperience/OnlineCards";
import CardHrs from "./Components/Onlineexperience/CardHrs";
import Login from "./Components/Loginpage/Login";

//coding monks
function App() {
  return (
     <div>
   
   <Routes>
          <Route exact path="/" element={<Routing />} />
          <Route path="/Detailspage" element={<Detailspage />} />
          <Route path="/CardHrs" element={<CardHrs />} />
      </Routes>
     </div>
  );
}

export default App;
/* 
   <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="/Detailspage" element={<Detailspage />} />
      </Routes>  
      
      
        
     
  */