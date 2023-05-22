import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/authentication/Login.js";
import Register from "./components/authentication/Register.js";
import SidebarMenu from "./components/Sidebar.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

function DashboardLayout() {
  return (
    <>
      <SidebarMenu />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}