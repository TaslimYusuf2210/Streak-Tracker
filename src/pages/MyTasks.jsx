import { IoIosAdd } from "react-icons/io";
import TaskTabs from "../components/TaskTabs";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import { getAllHabits } from "../api";
import Modal from "../components/Modal"
import CreateTask from "../components/CreateTask";
import UpdateTask from "../components/UpdateTask";
import { deleteHabit } from "../api";

const habitTabs = ["All", "Daily", "Weekly", "Custom"];

function Tasks() {
    const [filter, setFilter] = useState("All")
    const [habits, setHabits] = useState([])
    const [dailyHabits, setDailyHabits] = useState()
    const [weeklyHabits, setWeeklyHabits] = useState()
    const [customHabits, setCustomHabits] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState("")
    const [editingHabit, setEditingHabit] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            console.log("Token dey")
            getAllHabits(token)
            .then((data) => {console.log(data); setHabits(data)})
            .catch((err) => console.error("Failed to get data:", err))

            console.log(habits)
        }
    }, [])

    useEffect(()=> {
        console.log(habits)
        const daily = habits.filter(hab => hab.frequency == "daily")
        const weekly = habits.filter(hab => hab.frequency == "weekly")
        const custom = habits.filter(hab => hab.frequency == "custom")
        console.log(daily, weekly, custom)
        setDailyHabits(daily)
        setWeeklyHabits(weekly)
        setCustomHabits(custom)
    }, [habits])

    function renderHabits() {
        let list = [];

        if (filter === "All") {
            list = habits;
        } else if (filter === "Daily") {
            list = dailyHabits;
        } else if (filter === "Weekly") {
            list = weeklyHabits;
        } else if (filter === "Custom") {
            list = customHabits;
        }

        // ⛔ No habits for this filter
        if (!list || list.length === 0) {
            return <div className="text-center text-gray-500 h-full grid place-items-center">No habit available</div>;
        }

        // ✅ Render habits
        return list.map((item) => (
            <TaskList
            key={item.id}
            habit={item}
            task={item.title}
            type={item.frequency}
            currentStreak={item.currentStreak}
            bestStreak={item.bestStreak}
            handleDelete={handleDelete}
            onTrackSuccess={() => getAllHabits()}
            onClickEdit={handleUpdateHabit}
            />
        ));
    }

    function handleUpdateHabit(render, habit) {
        setEditingHabit(habit)
        setModalContent(render)
        setIsModalOpen(true)
    }

    function handleOpenModal(par) {
        setIsModalOpen(true)
        setModalContent(par)
    }

    async function handleDelete(id, habit) {
        const token = localStorage.getItem("token")
        deleteHabit(id, habit).then(() => {
            console.log("ID:", id, habit)
            alert("Habit successfully deleted")
            getAllHabits(token)
            .then((data) => {console.log(data); setHabits(data)})
            .catch((err) => console.error("Failed to get data:", err))
            // setHabits(prev => prev.filter(task => task.id !== id))
        }).catch((err) => {
            console.error(err)
            alert("Failed to delete Habit")
        })
    }

    return ( 
        <div className="h-full">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">My Tasks</h1>
                    <p className="text-gray-600 lg:text-lg font-medium">Manage your habits and track your streaks</p>
                </div>
                <button 
                onClick={() => handleOpenModal("createTask")}
                className="lg:px-4 px-2 py-2 bg-primary rounded-lg 
                text-white font-medium flex items-center gap-2 hover:bg-blue-400"
                >
                <IoIosAdd className="text-xl hidden md:block"/> 
                <span>Add Task</span> 
                </button>
            </div>
            <div className="h-full">
                <TaskTabs 
                currentTab={setFilter}
                tabs= {habitTabs}
                >
                </TaskTabs>
                {renderHabits() }
            </div>
            <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            width="w-[65%]"
            >
                {modalContent === "createTask" &&
                <CreateTask
                closeModal={setIsModalOpen}
                ></CreateTask>
                }
                {modalContent === "editHabit" &&
                <UpdateTask
                habit={editingHabit}
                onUpdateHabit={handleUpdateHabit}
                ></UpdateTask>
                }
            </Modal>
        </div>
     );
}

export default Tasks;