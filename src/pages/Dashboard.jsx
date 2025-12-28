import { AiOutlineFire } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { GiTrophyCup } from "react-icons/gi";
import { LuTarget } from "react-icons/lu";
import Card from "../components/Card";
import Task from "../components/Task";
import {useState, useEffect} from "react"
import { getUserProfile, getAnalytics, getAllHabits } from "../api";

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
    const [habits, setHabits] = useState(null)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [analyticsData, setAnalyticsData] = useState(null)

    // async function fetchHabits() {
    //     try {
    //         const data = await getTasks(); // → returns array like above
    //         setHabits(data);
    //     } catch (error) {
    //         console.error(error);
    //         alert("Failed to load today's habits");
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        const token = localStorage.getItem("token")

        // fetchHabits()
        getUserProfile(token)
        .then((data) => {setUser(data)})
        .catch((err) => console.error("Failed to load user:", err));
        getAnalytics(token)
        .then((data) => {console.log(data); setAnalyticsData(data)})
        .catch((err) => console.error("Failed to get analytics data:", err));

    }, [])

    return ( 
        <div className="space-y-8">
            <div className="text-left flex justify-between">
                <div>
                    <h1 className="font-bold md:text-3xl text-2xl">Welcome, {user?.data.name || "guest"}!</h1>
                    <p className="lg:text-lg text-gray-600 font-medium">Here's your progress overview</p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card
                title="Total Habits"
                icon={<LuTarget />}
                value={analyticsData? analyticsData.data.total_tasks : "Loading"}
                footer="Active habits tracked"
                iconColor="text-gray-500"
                mainTextColor="text-black"
                >
                </Card>
                <Card
                title="Completed Today"
                icon= {<CiCircleCheck />}
                value={analyticsData? analyticsData.data.completed_today : "Loading"}
                footer={`${analyticsData? analyticsData.data.completion_rate : "___"}% completion rate`}
                iconColor="text-gray-500"
                mainTextColor="text-primary"
                >
                </Card>
                <Card
                title="Current Streaks"
                icon= {<AiOutlineFire />}
                value={analyticsData? analyticsData.data.longest_streak : "Loading"}
                footer="Active streaks running"
                iconColor="text-orange-500"
                mainTextColor="text-orange-500"
                >
                </Card>
                <Card
                title="Longest Streak"
                icon= {<GiTrophyCup />}
                value={analyticsData? analyticsData.data.total_tasks : "Loading"}
                footer="Days in a row"
                iconColor="text-gray-500"
                mainTextColor="text-orange-600"
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
                    {loading ? <div className="grid place-items-center text-red-500">Feature not available</div> : 

                    habits.map((habit, index) => (
                        <Task
                        key={index}
                        task={habit.title}
                        days={habit.current_streak}
                        habitId={habit.id}
                        completedToday={habit.completed_today}
                        onTrackSuccess={fetchTasks}
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