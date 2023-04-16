import Card from "./Card";
import styles from './ErrorModal.module.css';
import Button from "./Button";
const Error = (props) => {

  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClosed}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Error;
