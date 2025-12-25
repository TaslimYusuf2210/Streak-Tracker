import Checkbox from "./Checkbox";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
import { trackTask } from "../api";

function TaskList({task, type, currentStreak, bestStreak, handleDelete, habit, onTrackSuccess, onClickEdit}) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    if (loading) return;
    const nextChecked = !checked;
    setChecked(nextChecked); // optimistic UI update
    setLoading(true);

    try {
      await trackTask(habit.id, nextChecked);

      // Optional: notify parent to refresh streaks/data
      if (onTrackSuccess) {
        onTrackSuccess(habit.id, nextChecked);
      }
    } catch (error) {
      console.error("Track failed:", error);
      alert("Failed to save progress. Please try again.");
      setChecked(!nextChecked); // revert on failure
    } finally {
      setLoading(false);
    }

    // setChecked((prev) => {
    //   const next = !prev;
    //   return next;
    // });
  }

  return (
    <div
      className={`shadow-lg mt-8 px-4 py-8 rounded-xl flex flex-col gap-2 justify-between items-center ${
        checked ? "bg-gray-200" : "bg-white"
      } ${loading ? "opacity-75" : ""}`
    }
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <Checkbox checked={checked} onToggle={handleToggle} disabled={loading}></Checkbox>
          <p
            className={`font-medium ${
              checked ? "line-through text-gray-500" : "text-black"
            }`}
          >
            {task}
          </p>
          <span className="text-xs p-1 bg-gray-100 rounded-xl">{type}</span>
        </div>
        <div className="flex items-center gap-8">
          <LuPencil onClick={() => onClickEdit("editHabit")} className="text-lg cursor-pointer" />
          <MdDelete
          onClick={() => handleDelete(habit.id, habit)}
          className="text-xl text-red-500 cursor-pointer" 
          />
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 w-full px-10">
        <div className="flex items-center gap-2 text-gray-600">
          <RiFireLine className="text-orange-500 text-xl" />
          <p className="text-orange-500 font-extrabold text-xl">{currentStreak}</p>
          <span>days</span>
        </div>
        <p>Best: <span className="font-semibold text-black">{bestStreak}</span> days</p>
      </div>
    </div>
  );
}

export default TaskList;
