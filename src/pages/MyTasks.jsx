import { IoIosAdd } from "react-icons/io";
import TaskTabs from "../components/TaskTabs";
import TaskList from "../components/TaskList";

const testTasks = [
  { id: 1, task: "Morning Exercise", type: "Daily", currentStreak: 7, bestStreak: 14 },
  { id: 2, task: "Read for 30 minutes", type: "Daily", currentStreak: 14, bestStreak: 21 },
  { id: 3, task: "Weekly Report", type: "Weekly", currentStreak: 5, bestStreak: 8 },
  { id: 4, task: "Team Meeting", type: "Weekly", currentStreak: 5, bestStreak: 8 },
  { id: 5, task: "Meditate", type: "Daily", currentStreak: 21, bestStreak: 21 },
  { id: 6, task: "Practice Guitar", type: "Custom", currentStreak: 3, bestStreak: 10 },
];

function Tasks() {
    return ( 
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">My Tasks</h1>
                    <p className="text-gray-600 text-lg font-medium">Manage your habits and track your streaks</p>
                </div>
                <button 
                className="px-4 py-2 bg-primary rounded-lg 
                text-white font-medium flex items-center gap-2 hover:bg-blue-400"
                >
                <IoIosAdd className="text-xl"/> 
                <span>Add Task</span> 
                </button>
            </div>
            <div>
                <TaskTabs></TaskTabs>
                {testTasks.map((item) => (
                    <TaskList
                    key={item.id}
                    task={item.task}
                    type={item.type}
                    currentStreak={item.currentStreak}
                    bestStreak={item.bestStreak}
                    >
                    </TaskList>
                ))
                }
            </div>
        </div>
     );
}

export default Tasks;