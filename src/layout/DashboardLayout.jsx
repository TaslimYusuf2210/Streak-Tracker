import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return ( 
        <div className="flex ">
            <Sidebar></Sidebar>
            <main className="flex-1 p-5 min-h-screen">
                <Outlet />
            </main>
        </div>
     );
}

export default DashboardLayout;