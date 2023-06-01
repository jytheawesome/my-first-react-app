import styles from "./Alert.module.css";

interface Props {
  alertText: string;
  onClick: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className={styles["overlay"]} onClick={props.onClick}>
      <div className={styles["alert-button"]}>
        <strong>{props.alertText}</strong>
        <button
          type="button"
          className="btn-close"
          onClick={props.onClick}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
