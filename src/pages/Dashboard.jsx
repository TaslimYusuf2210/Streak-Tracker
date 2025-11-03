import { AiOutlineFire } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { GiTrophyCup } from "react-icons/gi";
import { LuTarget } from "react-icons/lu";
import Card from "../components/card";
import Task from "../components/Task";
import {useState, useEffect} from "react"
import { getUserProfile } from "../api";

const tasks = [
    {
        tasks: "Morning Exercise",
        days: 7
    },
    {
        tasks: "Read for 30 minutes",
        days: 14
    },
    {
        tasks: "Drink 8 glasses of water",
        days: 5
    },
    {
        tasks: "Meditate",
        days: 21
    },
    {
        tasks: "Practice coding",
        days: 3
    },
]

const cards = [
    {
        title: "Total Habits",
        icon: <LuTarget />,
        value: 8,
        footer: "Active habits tracked"
    },
    {
        title: "Completed Today",
        icon: <CiCircleCheck />,
        value: 5/8,
        footer: "63% completion rate"
    },
    {
        title: "Current Streaks",
        icon: <AiOutlineFire />,
        value: 3,
        footer: "Active streaks running"
    },
    {
        title: "Longest Streak",
        icon: <GiTrophyCup />,
        value: 21,
        footer: "Days in a row"
    },
]

function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            console.log("Token dey")
            getUserProfile(token)
            .then((data) => {console.log(data); setUser(data)})
            .catch((err) => console.error("Failed to load user:", err));
        }
    }, [])
    return ( 
        <div className="space-y-8">
            <div className="text-left flex justify-between">
                <div>
                    <h1 className="font-bold md:text-3xl text-2xl">Welcome, {user? user.name : "Guest"}!</h1>
                    <p className="lg:text-lg text-gray-600 font-medium">Here's your progress overview</p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card
                title="Total Habits"
                icon={<LuTarget />}
                value="8"
                footer="Active habits tracked"
                iconColor="text-gray-500"
                mainTextColor="text-black"
                >
                </Card>
                <Card
                title="Completed Today"
                icon= {<CiCircleCheck />}
                value="5/8"
                footer="63% completion rate"
                iconColor="text-gray-500"
                mainTextColor="text-primary"
                >
                </Card>
                <Card
                title="Current Streaks"
                icon= {<AiOutlineFire />}
                value="3"
                footer="Active streaks running"
                iconColor="text-orange-500"
                mainTextColor="text-orange-500"
                >
                </Card>
                <Card
                title="Longest Streak"
                icon= {<GiTrophyCup />}
                value="21"
                footer="Days in a row"
                iconColor="text-gray-500"
                mainTextColor="text-orange-500"
                >
                </Card>
                {/* {cards.map((card, index) => (
                <Card
                key={index}
                title={card.title}
                icon={card.icon}
                value={card.value}
                footer={card.footer}
                >

                </Card>
                ))} */}
            </div>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-3xl font-bold">Today's Tasks</h3>
                    <button className="px-4 py-2 bg-primary rounded-lg text-white font-medium hover:bg-blue-400">View All Tasks</button>
                </div>
                <div className="mt-8 space-y-4">
                    {tasks.map((item, index) => (
                        <Task
                        key={index}
                        task={item.tasks}
                        days={item.days}
                        >
                        </Task>
                    ))
                    }
                </div>
            </div>
        </div>
     );
}

export default Dashboard;