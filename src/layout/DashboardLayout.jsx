"use client"

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { GoSidebarExpand } from "react-icons/go";


function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleSidebar() {
        setIsOpen((prev) => !prev);
    }
    return ( 
        <div className="flex min-h-screen relative">
            <div
            className={
                `md:block z-50 transition-transform duration-300 
            ${isOpen ? "translate-x-0 block fixed top-0 left-0" : "-translate-x-full hidden"} md:translate-x-0`
            }>
                <Sidebar
                onLinkClick={()=> setIsOpen(false)}   
                >
                </Sidebar>
            </div>
            <main className={`flex-1 px-4 py-16 md:px-5 md:py-6 min-h-screen`}>
                    <Outlet />
                <button className="absolute top-4 right-4 z-50 md:hidden"
                onClick={() => toggleSidebar()}
                >
                    <GoSidebarExpand size={36}/>
                </button>
            </main>
        </div>
     );
}

export default DashboardLayout;