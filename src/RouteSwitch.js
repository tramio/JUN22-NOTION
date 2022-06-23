import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/JUN22-NOTION">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
