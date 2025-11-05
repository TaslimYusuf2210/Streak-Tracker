import { IoIosAdd } from "react-icons/io";
import TaskTabs from "../components/TaskTabs";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import { getAllHabits } from "../api";

const testTasks = [
  { id: 1, task: "Morning Exercise", type: "Daily", currentStreak: 7, bestStreak: 14 },
  { id: 2, task: "Read for 30 minutes", type: "Daily", currentStreak: 14, bestStreak: 21 },
  { id: 3, task: "Weekly Report", type: "Weekly", currentStreak: 5, bestStreak: 8 },
  { id: 4, task: "Team Meeting", type: "Weekly", currentStreak: 5, bestStreak: 8 },
  { id: 5, task: "Meditate", type: "Daily", currentStreak: 21, bestStreak: 21 },
  { id: 6, task: "Practice Guitar", type: "Custom", currentStreak: 3, bestStreak: 10 },
];

function Tasks() {
    const [filter, setFilter] = useState("All")
    const [habits, setHabits] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            console.log("Token dey")
            getAllHabits(token)
            .then((data) => {console.log(data); setHabits(data)})
            .catch((err) => console.error("Failed to get data:", err))
        }
    }, [])

    const filteredTasks = filter === "All" ? testTasks : testTasks.filter((t) => t.type === filter)
    return ( 
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">My Tasks</h1>
                    <p className="text-gray-600 lg:text-lg font-medium">Manage your habits and track your streaks</p>
                </div>
                <button 
                className="lg:px-4 px-2 py-2 bg-primary rounded-lg 
                text-white font-medium flex items-center gap-2 hover:bg-blue-400"
                >
                <IoIosAdd className="text-xl hidden md:block"/> 
                <span>Add Task</span> 
                </button>
            </div>
            <div>
                <TaskTabs currentTab={setFilter}></TaskTabs>
                {habits.length < 1 ?
                    habits.data.map((item) => (
                        <TaskList
                        key={item.id}
                        task={item.task}
                        type={item.type}
                        currentStreak={item.currentStreak}
                        bestStreak={item.bestStreak}
                        >
                        </TaskList>
                    )):
                    "No available habits"
                    
                }
            </div>
        </div>
     );
}

export default Tasks;