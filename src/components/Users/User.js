import styles from './User.module.css';
const User = (props) => {
  return (
    <div className={`${styles['user__des']}`}>
      <p>
        Welcome: {props.name} ({props.age} years old)
      </p>
    </div>
  );
};
export default User;
