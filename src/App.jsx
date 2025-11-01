import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Tasks from './pages/MyTasks'
import DashboardLayout from './layout/DashboardLayout'
import './App.css'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProtectedRoute from './layout/ProtectedRoute'

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with sidebar */}
        <Route path="/dashboard" 
        element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    <ToastContainer position='top-center' autoClose={3000}/>
    </div>
  )
}

export default App
