/** @format */

export default function FuncButtons({
	setIsEdit,
	setAmount,
	askForReset,
	setIsReset,
	setCount,
	isReset,
	isEdit,
}: {
	setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
	setAmount: React.Dispatch<React.SetStateAction<number>>
	askForReset: () => void
	setIsReset: React.Dispatch<React.SetStateAction<boolean>>
	setCount: React.Dispatch<React.SetStateAction<number>>
	isReset: boolean
	isEdit: boolean
}) {
	return (
		<div
			className="flex
				gap-7 w-full  justify-between "
		>
			<select
				name="amount"
				onChange={e => setAmount(Number(e.target.value))}
				id="amount"
				className=" text-blue-500 border-2 border-blue-500 outline-blue-500 rounded-lg w-28 bg-transparent px-2"
			>
				<option
					style={{ background: "none" }}
					value="1"
					className=" outline-blue-500 rounded-lg"
				>
					+1
				</option>
				<option style={{ background: "none" }} value="2">
					+2
				</option>
				<option style={{ background: "none" }} value="3">
					+3
				</option>
				<option style={{ background: "none" }} value="4">
					+4
				</option>
				<option style={{ background: "none" }} value="5">
					+5
				</option>
				<option style={{ background: "none" }} value="6">
					+6
				</option>
				<option style={{ background: "none" }} value="7">
					+7
				</option>
				<option style={{ background: "none" }} value="8">
					+8
				</option>
				<option style={{ background: "none" }} value="9">
					+9
				</option>
				<option style={{ background: "none" }} value="10">
					+10
				</option>
				<option style={{ background: "none" }} value="15">
					+15
				</option>
				<option style={{ background: "none" }} value="30">
					+30
				</option>
				<option style={{ background: "none" }} value="50">
					+50
				</option>
				<option style={{ background: "none" }} value="100">
					+100
				</option>
			</select>
			<button
				className="border-2 border-blue-500 rounded-lg w-28"
				onClick={() => setIsEdit(!isEdit)}
			>
				Edit
			</button>
			<button
				className="border-2 border-blue-500 rounded-lg w-28"
				onClick={askForReset}
			>
				Reset
			</button>

			{isReset ? (
				<div className="absolute w-full h-full rounded-2xl bg-blue-500 z-10 flex flex-col items-center justify-center gap-10">
					<h2 className="text-2xl text-white">
						Are you sure you want to reset?
					</h2>

					<div className="flex justify-around w-full ">
						<button
							className="text-[#FF5733] border-4 p-3 rounded-lg border-red-500"
							onClick={() => {
								setCount(0)
								setIsReset(false)
							}}
						>
							Yes
						</button>
						<button
							className="text-green-500 border-4 p-3 rounded-lg border-green-500"
							onClick={() => setIsReset(false)}
						>
							No
						</button>
					</div>
				</div>
			) : null}
		</div>
	)
}
