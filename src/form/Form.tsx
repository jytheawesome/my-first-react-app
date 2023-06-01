import {useRef, useState, FormEvent} from "react";
import Alert from "./Alert.tsx";
import styles from "./Form.module.css";

interface Props {
  onSubmitValues: (username: string, age: string) => void;
}

const Form = (props: Props) => {
  const usernameValue = useRef<HTMLInputElement>(null!);
  const ageValue = useRef<HTMLInputElement>(null!);
  const [showAlert, setAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState(
    "Oops! Your input was invalid. Please try again."
  );

  const submitValuesHandler = (event: FormEvent) => {
    event.preventDefault();
    const usernameToCheck = usernameValue.current.value.trim();
    const ageToCheck = ageValue.current.value.trim();
    if (usernameToCheck == "") {
      setAlertMessage("Oops! Username cannot be empty.");
      setAlertState(true);
    } else if (ageToCheck == "") {
      setAlertMessage("Oops! Age cannot be empty.");
      setAlertState(true);
    } else if (!/^[1-9][0-9]*$/.test(ageToCheck)) {
      setAlertMessage("Oops! Age must be an integer greater than 0.");
      setAlertState(true);
    } else {
      props.onSubmitValues(usernameValue.current.value, ageValue.current.value);
      usernameValue.current.value = "";
      ageValue.current.value = "";
    }
  };

  return (
    <>
      {showAlert && (
        <Alert alertText={alertMessage} onClick={() => setAlertState(false)} />
      )}
      <form onSubmit={submitValuesHandler}>
        <div className={styles["form-field"]}>
          <label className={styles["form-label"]} htmlFor="username">
            Username
          </label>
          <input
            className={styles["form-input"]}
            id="username"
            type="text"
            ref={usernameValue}
          />
        </div>
        <div className={styles["form-field"]}>
          <label className={styles["form-label"]} htmlFor="age">
            Age
          </label>
          <input
            className={styles["form-input"]}
            id="age"
            type="number"
            ref={ageValue}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add User
        </button>
      </form>
    </>
  );
};

export default Form;
