/** @format */

import { NavLink, useNavigate } from "react-router-dom"
import useSignOut from "react-auth-kit/hooks/useSignOut"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
export default function Header() {
	const isAuthenticated = useIsAuthenticated()
	const signOut = useSignOut()
	const navigate = useNavigate()

	return (
		<header>
			<div className="header__logo py-4">
				<img src="https://reactjs.org/logo.svg" alt="" />
			</div>
			<nav className="flex justify-center items-center gap-4 ">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/dashboard"}>Dashboard</NavLink>
				{isAuthenticated ? (
					<button
						className="py-2 px-4 border-2 border-sky-500 rounded-md  text-center text-blue-500"
						onClick={() => {
							try {
								signOut()
								navigate("/login")
							} catch (error) {
								console.log(error)
							}
						}}
					>
						SignOut
					</button>
				) : (
					<>
						<NavLink to={"/login"}>
							<button className="py-2 px-4 border-2 border-sky-500 rounded-md  text-center text-blue-500">
								Login
							</button>{" "}
						</NavLink>
						<NavLink to={"/register"}>
							<button className="py-2 px-4 border-2 border-sky-500 rounded-md  text-center text-blue-500">
								Register
							</button>
						</NavLink>
					</>
				)}
			</nav>
		</header>
	)
}
