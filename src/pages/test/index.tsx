import react, { useState, useEffect } from "react";
import axios from "axios";
type UserType = {
  name: String;
  city: String;
};
const Test = () => {
  return (
    <FakeUser>
      {(users: UserType[]) => (
        <table className="table-auto">
          <thead>
            <tr>
              <th>name</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="text-blue-900">{user?.name}</td>
                <td>{user?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </FakeUser>
  );
};

export default Test;

const FakeUser = (props: any) => {
  const { children } = props;
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
  return <>{children(users)}</>;
};
