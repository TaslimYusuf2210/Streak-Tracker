import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return ( 
        <div className="flex ">
            <Sidebar></Sidebar>
            <main className="flex-1 px-8 py-6 min-h-screen">
                <Outlet />
            </main>
        </div>
     );
}

export default DashboardLayout;