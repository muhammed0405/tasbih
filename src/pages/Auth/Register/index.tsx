/** @format */

import { useForm } from "react-hook-form"
import { signup } from "../../../redux/features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Register() {
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const navigate = useNavigate()
	const onSubmit = async data => {
		try {
			dispatch(signup(data))
			localStorage.setItem("email", data.email)
			navigate("/verify-email")
		} catch (error) {
			console.log("error", error)
		}
		console.log("data", data)
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen  gap-4  ">
			<h1 className="text-center text-blue-500 text-3xl ">Register</h1>
			<form
				action="#"
				className="max-w-[400px] w-full h-96 flex flex-col gap-4 p-4 rounded-md  mx-auto bg-blue-400"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col gap-2 text-white font-semibold">
					<label htmlFor="email">email</label>
					<input
						required
						{...register("email")}
						className="authInputs text-blue-500 p-2 rounded-sm "
						type="email"
						id="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="flex flex-col gap-2 text-white font-semibold">
					<label htmlFor="username">username</label>
					<input
						required
						{...register("username")}
						className="authInputs text-blue-500 p-2 rounded-sm"
						type="username"
						id="username"
						placeholder="Enter your username"
					/>
				</div>
				<div className="flex flex-col gap-2 text-white font-semibold">
					<label htmlFor="password">password</label>
					<input
						required
						{...register("password")}
						className="authInputs text-blue-500 p-2 rounded-sm"
						type="password"
						id="password"
						placeholder="Enter your password"
					/>
				</div>

				<button
					type="submit"
					className="py-2 px-4 text-blue-500 font-semibold text-xl border-none bg-white mt-[25px] rounded-md  text-center "
				>
					Register
				</button>
			</form>
		</div>
	)
}
