import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./UI/Card.tsx";
import Form from "./form/Form.tsx";
import styles from "./App.module.css";
import Person from "./form/Person.tsx";

const App = () => {
  const [showAlert, toggleAlertState] = useState(false);
  const [persons, updatePersons] = useState<Person[]>([]);
  const processValues = (username: string, age: string) => {
    if (username == "" || age == "" || !/^\d+$/.test(age)) {
      // empty input values or the age is not a string
      toggleAlertState(true);
      return;
    }
    updatePersons((prev) => [...prev, new Person(username, age)]);
  };

  return (
    <>
      {showAlert ? (
        <>
          <div className={styles["alert-button"]}>
            <strong>
              Oops! Input value for username and age cannot be empty. Age must
              be an integer and cannot be negative. Try again!
            </strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => toggleAlertState(false)}
            ></button>
          </div>
        </>
      ) : (
        <p></p>
      )}
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <Card>
            <Form submitValues={processValues} />
          </Card>
        </div>
        <div>
          {persons.map((person) => (
            <Card>
              <p>
                {person.username} ({person.age} years old)
              </p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
