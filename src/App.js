import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
// import Login
import Login from "./components/Sidebar/Login";
import Signup from "./components/Sidebar/Signup";

import Navb from './components/Sidebar/Navbar';
import Navbar from "./components/Sidebar/Navbar";
import Follow from "./components/Follow";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import 'font-awesome/css/font-awesome.min.css';
// import Hire from "./components/Hire";
function App() {
  return (
    <>
    {/* <SideBar/> */}
    {/* <Login/> */}
     {/* <Navbar/> */}
     
      {/* { <Hire/>} */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup/>} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/page1" element={<About/>}/>
          <Route path="/page2" element={<Follow/>}/>
        </Routes>

    </>
  );
}
export default App;