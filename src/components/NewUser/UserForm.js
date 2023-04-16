import { useState } from "react";
import styles from './UserForm.module.css';
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const UserFrom = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const onChangeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    const UserData = {
      name: enteredName,
      age: enteredAge,
    };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setMessage("Please complete all information!");
      setEnteredName("");
      setEnteredAge("");
      return;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      setMessage("Age must be more than 1!");
      setEnteredName("");
      setEnteredAge("");

      return;
    } else {
      props.onSaveUserData(UserData);
      setEnteredName("");
      setEnteredAge("");
    }
  };

  const onClosedHandler = () => {
    setIsValid(true);
  };

  return (
    <>
      {!isValid && (
        <ErrorModal
          title="An error occured!"
          onClosed={onClosedHandler}
          message={message}
        ></ErrorModal>
      )}
      <form className={`${styles['new-user__controls']}`} >
        <h1>Add User</h1>
        <div className={`${styles['new-user__control']}`}>
          <label>Username</label>
          <input
            type="text"
            onChange={onChangeNameHandler}
            value={enteredName}
          ></input>
        </div>
        <div className={`${styles['new-user__control']}`}>
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={onChangeAgeHandler}
            value={enteredAge}
          ></input>
        </div>
        <div className={`${styles['new-user__action']}`}>
          <Button type="submit" onClick={onClickHandler} >Add User</Button>
        </div>
      </form>
    </>
  );
};
export default UserFrom;
