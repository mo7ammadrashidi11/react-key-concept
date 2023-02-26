import react, { useState, useEffect, useCallback } from "react";
import axios from "axios";
type UserType = {
  name: String;
  city: String;
};
const useGetUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUser = async () => {
    const users = await axios.get<UserType[]>(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    return setUsers(users.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
};

export default useGetUsers;
