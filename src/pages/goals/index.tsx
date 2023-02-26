import react from "react";
import { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createGoal } from "../../redux/features/goals";
import { AppDispatch, RootState } from "../../redux/store";

const Goals = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { goals, isError, isLoading, isSuccess, message } = useSelector(
    (state: RootState) => state.goal
  );
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("text", text);
    dispatch(createGoal(text));
  };

  return (
    <Box display="flex">
      <Typography>Goals</Typography>
      <TextField
        id="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Add Goal
        </Button>
      )}
    </Box>
  );
};

export default Goals;
