// import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
    </>
  );
};
export default UserList;
