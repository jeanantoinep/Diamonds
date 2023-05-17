import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard.js";
import Login from "./components/authentication/Login.js";
import Register from "./components/authentication/Register.js";


export default function App() {
  return (
    
    <Router>
     
      <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />}/> */}
        

      </Routes>

    </Router>);
}