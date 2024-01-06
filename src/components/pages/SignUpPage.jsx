import React, { useEffect, useState } from "react";
import "./styles/css/pages.css";
import TextField from "@mui/material/Button";

const SignUpPage = ({ key }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("ОШИБКА", error));
  }, []);

  return (
    <div className="signUp">
      {users &&
        users.map((user) => <li key={user.user_id}>{user.username}</li>)}
      <form>
        <TextField id="standard-basic" label="Standard" variant="standard" />

      </form>
    </div>
  );
};

export default SignUpPage;
