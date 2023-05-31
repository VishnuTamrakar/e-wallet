import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login page/Login";
import Signup from "./pages/login page/Signup";
import Navbar from "./componenets/navbar/Navbar";
import Transection from "./componenets/transection/Transection";
import AddBalance from "./componenets/AddBalance/AddBalance";
import Dashboard from "./pages/home/Dashboard";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transaction" element={<Transection />} />
          <Route path="/addbalance" element={<AddBalance />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
