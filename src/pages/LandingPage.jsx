import { Link } from "react-router-dom";

function LandingPage() {
    return ( 
        <div className="h-screen flex justify-center items-center px-4">
            <div className="text-center space-y-10">
                <h1 className="md:text-5xl font-bold text-4xl">Streak Tracker</h1>
                <p className="text-xl text-gray-700">Built consistent habits and track your progress with daily streaks</p>
                <div className="font-medium space-x-6">
                    <Link to="/login" className="bg-primary hover:bg-hoverPrimary rounded-lg text-white md:px-8 md:py-4 px-6 py-3"> Sign In</Link>
                    <Link to="/register" className="md:px-8 md:py-4 px-6 py-3 rounded-lg border-gray-400 border hover:bg-gray-200"> Create Account</Link>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;