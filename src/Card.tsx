import styles from "./Card.module.css";
interface Props {
  children: React.ReactNode;
}

const Card = (props: Props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-body"]}>
        <div> {props.children} </div>
      </div>
    </div>
  );
};

export default Card;
