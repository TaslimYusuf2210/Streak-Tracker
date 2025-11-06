import { useState } from "react";

function SelectDaysTab() {
    const [isActive, setIsActive] = useState(false)

    function toggleActive(e) {
        console.log(e)
        setIsActive((prev) => !prev)
    }

    return ( 
        <button 
        type="button"
        onClick={() => toggleActive()}
        className=
        {`rounded-md border shadow-md border-gray-300 py-1 hover:bg-blue-50 
        ${isActive ? "bg-blue-600 text-white hover:bg-blue-500" : ""}`}
        value="Monday"
        >
            Mon
        </button>
     );
}

export default SelectDaysTab;