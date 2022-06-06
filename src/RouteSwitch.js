import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import App from "./App";
import SignUp from "./components/SignUp";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
