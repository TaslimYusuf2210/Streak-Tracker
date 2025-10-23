import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

function Settings() {
    const [on, setOn] = useState(true)
    const [emailNotification, setEmailNotification] = useState(false)
    const [streakAlert, setStreakAlert] = useState(false)
    const [dailySummary, setDailySummary] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    return ( 
        <div className="lg:mr-28">
            <div>
                <h1 className="font-bold text-3xl">Settings</h1>
                <p className="lg:text-lg text-gray-600 font-medium">Manage your account and preferences</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl border mt-6 border-gray-300 p-6">
                <header className="font-semibold text-gray-900 text-[22px]">Profile</header>
                <p className="text-gray-500 mb-4">Update your profile</p>
                <form className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-700 font-medium">Name</label>
                        <input type="text" placeholder="John Doe" className="border rounded-md border-gray-300 shadow py-2 px-4"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-700 font-medium">Email</label>
                        <input type="text" placeholder="John@Example.com" className="border rounded-md border-gray-300 shadow py-2 px-4"/>
                    </div>
                    <button className="font-medium bg-primary hover:bg-blue-400 rounded-md py-2 px-4 text-white">Save Changes</button>
                </form>
            </div>
            <div className="bg-white shadow-lg rounded-xl border mt-6 border-gray-300 p-6">
                <header className="font-semibold text-gray-900 text-[22px]">Notifications</header>
                <p className="text-gray-500 mb-4"></p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-gray-500">Receive email reminders for your tasks</p>
                        </div>
                        <ToggleSwitch
                        checked={emailNotification}
                        onChange={setEmailNotification}
                        size="sm"
                        colorClass="bg-primary"
                        >
                        </ToggleSwitch>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="font-medium">Streak Alerts</p>
                            <p className="text-gray-500">Get notified when you're about to lose a streak</p>
                        </div>
                        <ToggleSwitch
                        checked={streakAlert}
                        onChange={setStreakAlert}
                        size="sm"
                        colorClass="bg-primary"
                        >
                        </ToggleSwitch>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="font-medium">Daily Summary</p>
                            <p className="text-gray-500">Receive a daily summary of your progress</p>
                        </div>
                        <ToggleSwitch
                        checked={dailySummary}
                        onChange={setDailySummary}
                        size="sm"
                        colorClass="bg-primary"
                        >
                        </ToggleSwitch>
                    </div> 
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl border mt-6 border-gray-300 p-6">
                <header className="font-semibold text-gray-900 text-[22px]">Appearance</header>
                <p className="text-gray-500 mb-4">Customize how your app looks</p>
                <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="font-medium">Dark Mode</p>
                            <p className="text-gray-500">Switch to dark mode</p>
                        </div>
                        <ToggleSwitch
                        checked={darkMode}
                        onChange={setDarkMode}
                        size="sm"
                        colorClass="bg-primary"
                        >
                        </ToggleSwitch>
                    </div>
            </div>
        </div>
     );
}

export default Settings;