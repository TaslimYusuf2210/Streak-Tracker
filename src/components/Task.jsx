import { useState } from "react";
import Checkbox from "./Checkbox";
import { RiFireLine } from "react-icons/ri";
import { trackTask } from "../api";

function Task({task, days, habitId, completedToday = false, onTrackSuccess}) {
    const [checked, setChecked] = useState(completedToday)
    const [loading, setLoading] = useState(false);

    async function handleToggle() {
        if (loading) return;

        const nextChecked = !checked;
        setChecked(nextChecked);
        setLoading(true);

        try {
        await trackTask(habitId, nextChecked);
        if (onTrackSuccess) onTrackSuccess(habitId, nextChecked);
        } catch (error) {
        console.error("Track failed:", error);
        alert("Failed to save. Try again.");
        setChecked(!nextChecked); // revert
        } finally {
        setLoading(false);
        }
        // setChecked(prev => {
        // const next = !prev;
        // return next;
        // })
    }
    return ( 
        <div className={`shadow-lg px-4 py-8 rounded-xl flex justify-between items-center ${checked ? "bg-gray-200" : "bg-white"}`}>
            <div className="flex gap-4">
                <Checkbox 
                checked={checked}
                onToggle={handleToggle}
                disabled={loading}
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