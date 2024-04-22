import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DonationAreas from "./pages/DonationAreas";
import Ourprograms from "./pages/Ourprograms";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donationareas" element={<DonationAreas/>}/>
        <Route path="/ourprograms" element={<Ourprograms/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
