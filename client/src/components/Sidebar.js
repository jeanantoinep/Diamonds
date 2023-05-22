import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function SidebarMenu() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Menu</div>
      <div className="sidebar-items">
        <Link to="/" className="sidebar-item">
          Dashboard
        </Link>
        <Link to="/profile" className="sidebar-item">
          Profile
        </Link>
        <Link to="/settings" className="sidebar-item">
          Settings
        </Link>
      </div>
    </div>
  );
}
