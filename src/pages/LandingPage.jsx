function LandingPage() {
    return ( 
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold">Streak Tracker</h1>
                <p className="text-xl text-gray-700">Built consistent habits and track your progress with daily streaks</p>
                <div className="font-medium space-x-6">
                    <button className="bg-primary hover:bg-hoverPrimary rounded-lg text-white px-8 py-4"> Sign In</button>
                    <button className="px-8 py-4 rounded-lg border-gray-400 border hover:bg-gray-200"> Create Account</button>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;