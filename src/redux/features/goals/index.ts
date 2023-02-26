import {} from "redux";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import goalService from "./services";
interface GoalType {
  goals: string[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: GoalType = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const createGoal = createAsyncThunk(
  "goals/create",
  async (text: string, thunkAPi) => {
    try {
      console.log(text);
      const token = localStorage.getItem("token");
      return await goalService.createGoal(text, token as string);
    } catch (error) {
      console.log(error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);
export const goalSlices = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "message";
      });
  },
});
export const { reset } = goalSlices.actions;
export default goalSlices.reducer;
