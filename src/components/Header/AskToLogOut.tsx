/** @format */

import { useNavigate } from "react-router-dom"

export default function AskToLogOut({ setLogOut, signOut }) {
	const navigate = useNavigate()
	return (
		<div className="absolute w-full h-full rounded-2xl bg-blue-500 z-10 flex flex-col items-center justify-center gap-10">
			<h2 className="text-2xl text-white">Are you sure you want to logout?</h2>

			<div className="flex justify-around w-full ">
				<button
					className="text-[#FF5733] border-4 p-3 rounded-lg border-red-500"
					onClick={() => {
						try {
							signOut()
							setLogOut(false)

							navigate("/login")
						} catch (err) {
							console.log(err)
						}
					}}
				>
					Yes
				</button>
				<button
					className="text-green-500 border-4 p-3 rounded-lg border-green-500"
					onClick={() => setLogOut(false)}
				>
					No
				</button>
			</div>
		</div>
	)
}
