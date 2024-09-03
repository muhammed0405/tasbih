/** @format */

import { useState } from "react"
import AnimatedCounter from "./AnimatedCount"
import FuncButtons from "./FuncButtons"

export default function Count({ bgColor }: { bgColor: string }) {
	const [count, setCount] = useState(0)
	const [amount, setAmount] = useState(1)
	const [isEdit, setIsEdit] = useState(false)
	const [isReset, setIsReset] = useState(false)
	const askForReset = () => {
		setIsReset(true)
	}

	return (
		<div className="w-full relative pb-4  ">
			<h1 className="text-3xl font-bold text-center mb-10">Tasbih Counter</h1>
			<div className="flex flex-col justify-between gap-7">
				<FuncButtons
					setIsEdit={setIsEdit}
					setAmount={setAmount}
					askForReset={askForReset}
					setCount={setCount}
					setIsReset={setIsReset}
					isReset={isReset}
					isEdit={isEdit}
				/>
				{isEdit ? (
					<input
						type="number"
						className="w-full h-16 bg-transparent text-center text-[47px] absolute  top-[150px] rounded-lg"
						style={{
							border: isEdit ? " 3px solid blue" : "none",
						}}
						value={count}
						onChange={e => setCount(Number(e.target.value))}
					/>
				) : (
					<AnimatedCounter count={count} />
				)}

				<div className="flex flex-col  items-center mt-28">
					<button
						className="w-48 h-48 rounded-full text-white  bg-blue-500 text-7xl border-4 border-blue-500"
						onClick={() => {
							setCount(prev => prev + amount)
							setIsEdit(false)
						}}
					>
						+
					</button>
					<button
						style={{
							border:
								bgColor === "white" ? "4px solid white" : "4px solid #343434",
							transition: "all 0.3s ease-in-out",
						}}
						className="w-24 h-24 text-5xl bg-blue-500 text-white  rounded-full border-4  absolute bottom-[-2rem] z-0"
						onClick={() => {
							setCount(prev => (prev > 0 ? prev - amount : 0))
							setIsEdit(false)
						}}
					>
						-
					</button>
				</div>
			</div>
		</div>
	)
}
