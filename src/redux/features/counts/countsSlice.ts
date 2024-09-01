/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pb from "../../../services/pocketbase"

export const fetchCounts = createAsyncThunk(
	"counts/fetchCounts",
	async (userId: string) => {
		const records = await pb.collection("counts").getList(1, 50, {
			filter: `user="${userId}"`,
		})
		return records.items
	}
)

export const addCount = createAsyncThunk(
	"counts/addCount",
	async ({ type, count }: { type: string; count: number }) => {
		const record = await pb.collection("counts").create({
			user: pb.authStore.model.id,
			type,
			count,
			date: new Date().toISOString(),
		})
		return record
	}
)

const countsSlice = createSlice({
	name: "counts",
	initialState: {
		counts: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCounts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchCounts.fulfilled, (state, action) => {
				state.counts = action.payload
				state.loading = false
			})
			.addCase(fetchCounts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(addCount.fulfilled, (state, action) => {
				state.counts.push(action.payload)
			})
	},
})

export default countsSlice.reducer
