import { useState } from "react";

function TaskTabs({currentTab, tabs}) {
    const [activeTab, setActiveTab] = useState("All")

    // const tabs = ["All", "Daily", "Weekly", "Custom"];

    function handleClick(tab) {
        setActiveTab(tab)
        currentTab(tab)
    }
    return ( 
        <div className="flex gap-3 mt-6">
             {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-4 py-1 rounded-lg font-medium transition-all duration-300 ${
            activeTab === tab
              ? "bg-primary text-white shadow-md"
              : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
        </div>
     );
}

export default TaskTabs;