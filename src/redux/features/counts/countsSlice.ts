/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pb from "../../../services/pocketbase"
import axiosInstance from "../auth/axiosAuthUtils"
import { User } from "../auth/authSlice"

export const fetchCounts = createAsyncThunk(
	"counts/fetchCounts",
	async (userId: string) => {
		const records = await pb.collection("counts").getList(1, 50, {
			filter: `user="${userId}"`,
		})
		return records.items
	}
)

export const login = createAsyncThunk(
	"auth/login",
	async (
		{
			user,
			zikr_type,
			last_count,
			last_step,
		}: {
			user: string
			zikr_type: string
			last_count: number
			last_step: number
		},
		{ rejectWithValue }
	) => {
		try {
			const data = {
				user, // RELATION_RECORD_ID
				zikr_type, // RELATION_RECORD_ID
				last_count, // e.g., 123
				last_step, // e.g., 123
			}

			const response = await axiosInstance.post(
				"/api/collections/counts/records",
				data
			)
			return response.data.items
		} catch (error) {
			console.log("Error details:", error)
			return rejectWithValue(handleApiError(error))
		}
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
