import { useState } from "react";
import Checkbox from "./Checkbox";
import { RiFireLine } from "react-icons/ri";

function Task({task, days}) {
    const [checked, setChecked] = useState(false)
    function handleToggle() {
        setChecked(prev => {
        const next = !prev;
        return next;
        })
    }
    return ( 
        <div className={`shadow-lg px-4 py-8 rounded-xl flex justify-between items-center ${checked ? "bg-gray-200" : "bg-white"}`}>
            <div className="flex gap-4">
                <Checkbox 
                checked={checked}
                onToggle={handleToggle}
                ></Checkbox>
                <p className={`font-medium ${checked ? "line-through text-gray-500" : "text-black"}`}>{task}</p>
            </div>
            <div className="flex items-center gap-2">
                <RiFireLine className="text-orange-500 text-xl"/>
                <p className="text-orange-500 font-medium text-lg">{days}</p>
                <span>days</span>
            </div>
        </div>
     );
}

export default Task;