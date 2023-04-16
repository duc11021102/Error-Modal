import UserFrom from "./UserForm";
import './NewUser.module.css';
import Card from "../UI/Card";

const NewUser = (props) => {
  const onSaveUserDataHandler = (enteredUserData) => {
    const userData = {
      id: Math.random().toString(),
      ...enteredUserData,
    };
    props.onAddUser(userData);
  };

  return (
    <Card>
      <UserFrom onSaveUserData={onSaveUserDataHandler}></UserFrom>
    </Card>
  );
};
export default NewUser;
