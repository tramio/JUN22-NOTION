import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
