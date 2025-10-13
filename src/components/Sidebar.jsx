import { NavLink } from "react-router-dom";

function Sidebar() {
    return ( 
        <div className="max-w-56 bg-red-500 p-5">
            <h2>Streak Tracker</h2>
        <nav>
            <ul>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/dashboard/tasks">Tasks</NavLink></li>
            <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
            </ul>
        </nav>
        </div>
     );
}

export default Sidebar;