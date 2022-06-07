import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./Homepage";
import SignUp from "./components/SignUp";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
