import React from "react";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import { useState } from "react";
import "firebase/database";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (user) => {
    console.log(user);
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <>
      <NewUser onAddUser={onAddUserHandler}></NewUser>
      <Users item={users}></Users>
    </>
  );
}

export default App;
