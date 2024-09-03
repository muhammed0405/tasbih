/** @format */

import { NavLink } from "react-router-dom"
import useSignOut from "react-auth-kit/hooks/useSignOut"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { PiSignOutBold } from "react-icons/pi"
import { MdHome } from "react-icons/md"
import { FaList } from "react-icons/fa"
import { useState } from "react"
import AskToLogOut from "./AskToLogOut"

export default function Header() {
	// This returns a boolean, not a function
	const isAuthenticated = useIsAuthenticated()
	const [logOut, setLogOut] = useState(false)
	const signOut = useSignOut()

	return (
		<header>
			<nav className="flex justify-center items-center gap-4 h-40">
				<NavLink to="/">
					<button className="py-2 px-4 border-2 border-sky-500 rounded-md text-center text-blue-500">
						<MdHome />
					</button>
				</NavLink>
				<NavLink to="/dashboard">
					<button className="py-2 px-4 border-2 border-sky-500 rounded-md text-center text-blue-500">
						<FaList />
					</button>
				</NavLink>
				{isAuthenticated ? (
					<>
						<button
							className="py-2 px-4 border-2 border-sky-500 rounded-md text-center text-blue-500"
							onClick={() => {
								setLogOut(!logOut)
							}}
						>
							<PiSignOutBold />
						</button>

						{logOut && <AskToLogOut setLogOut={setLogOut} signOut={signOut} />}
					</>
				) : (
					<>
						<NavLink to="/login">
							<button className="py-2 px-4 border-2 border-sky-500 rounded-md text-center text-blue-500">
								Login
							</button>
						</NavLink>
						<NavLink to="/register">
							<button className="py-2 px-4 border-2 border-sky-500 rounded-md text-center text-blue-500">
								Register
							</button>
						</NavLink>
					</>
				)}
			</nav>
		</header>
	)
}
