import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return ( 
        <div className="flex h-screen">
            <Sidebar></Sidebar>
            <main className="flex-1 p-5 bg-yellow-400">
                <Outlet />
            </main>
        </div>
     );
}

export default DashboardLayout;