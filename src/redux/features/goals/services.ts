import axios from "axios";

const API_URL = "http://localhost:5000/goal";
const createGoal = async (text: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, { text }, config);
  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;
