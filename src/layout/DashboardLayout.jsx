"use client"

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { GoSidebarExpand } from "react-icons/go";


function DashboardLayout() {
    const [isOpen, setIsOpen] = useState("false")
    return ( 
        <div className="flex min-h-screen relative">
            <div
            className={``
            //     `fixed md:static top-0 left-0 h-full bg-white z-50 transition-transform duration-300 
            // ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`
            }>
                <Sidebar></Sidebar>
            </div>
            {/* {isOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            />
            )} */}
            {/* <button
                className="absolute top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md md:hidden"
                onClick={() => setIsOpen(true)}
            >
                <GoSidebarExpand size={24} />
            </button> */}
            <main className={`flex-1 px-4 py-16 md:px-5 md:py-6 min-h-screen`}>
                    <Outlet />
                <button className="absolute top-4 right-4 z-50 md:hidden"
                onClick={() => setIsOpen(true)}
                >
                    <GoSidebarExpand size={36}/>
                </button>
            </main>
        </div>
     );
}

export default DashboardLayout;