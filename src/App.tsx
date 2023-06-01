import {useState} from "react";
import Form from "./form/Form.tsx";
import Person from "./classes/Person.tsx";
import PersonsDisplay from "./PersonsDisplay.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import styles from "./App.module.css";

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const submitValuesHandler = (username: string, age: string) => {
    setPersons((prev) => [...prev, new Person(username, age)]);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <Form onSubmitValues={submitValuesHandler} />
      </div>
      <div>
        <PersonsDisplay persons={persons} />
      </div>
    </div>
  );
};

export default App;
