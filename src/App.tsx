/** @format */
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import AuthOutlet from "@auth-kit/react-router/AuthOutlet"
import "./App.css"
import VerifyEmail from "./pages/Auth/VerifyEmail"
import ResetPassword from "./pages/Auth/ResetPassword"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword"
import ProtectedAuthRoute from "./components/ProtectedRoutes/ProtectedRoute"
const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Routes>
					<Route element={<AuthOutlet fallbackPath="/login" />}>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>

					<Route element={<ProtectedAuthRoute redirectPath="/dashboard" />}>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
					</Route>

					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/verify-email" element={<VerifyEmail />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
