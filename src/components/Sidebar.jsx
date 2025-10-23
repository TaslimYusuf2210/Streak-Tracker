import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const items = [
    {
        title: "Dashboard",
        icon: <LuLayoutDashboard/>,
        url: "/dashboard"
    },
    {
        title: "My Tasks",
        icon: <FaTasks />,
        url: "/dashboard/tasks"
    },
    {
        title: "Settings",
        icon: <CiSettings />,
        url: "/dashboard/settings"
    },
]

function Sidebar() {
    return ( 
        <div className="min-w-56 text-center bg-white justify-between hidden md:flex flex-col w-64 h-screen fixed md:sticky top-0 shadow-md">
            <div>
                <div className="p-4 flex items-center justify-center gap-2">
                    <div className="p-2 rounded-lg bg-primary"><FaFire  className="text-white"/></div>
                    <h2 className="text-2xl font-bold">Streak Tracker</h2>
                </div>
                <hr />
                <nav className="p-4 text-left">
                    <ul className="space-y-4">
                        {items.map((item, index) =>
                        <li key={index}>
                            <NavLink 
                            to={item.url}
                            end
                            className={({ isActive }) =>
                            `flex items-center gap-2 transition-colors duration-200 px-3 py-2 rounded-lg 
                            ${isActive 
                                ? "text-primary bg-primary/10 rounded-lg" 
                                : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"}`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.title}</span>
                            </NavLink>
                        </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="">
                <hr className="w-full"/>
                <div className="p-4">
                    <NavLink 
                    className="p-4 flex justify-start gap-2 
                    items-center transition-colors text-red-500 
                    duration-200 px-3 py-2 rounded-lg hover:bg-red-50">
                        <span><MdLogout className="text-lg"/></span>
                        <span className="font-medium">Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;