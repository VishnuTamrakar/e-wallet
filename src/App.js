import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login page/Login";
import Signup from "./pages/login page/Signup";
import Home from "./pages/home/Home";
import Navbar from "./componenets/navbar/Navbar";
import Transection from "./componenets/transection/Transection";
import AddBalance from "./componenets/AddBalance/AddBalance";
import Popup from "./componenets/popup/Popup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Popup />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transaction" element={<Transection />} />
          <Route path="/addbalance" element={<AddBalance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
