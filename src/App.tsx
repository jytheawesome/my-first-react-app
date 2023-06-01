import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./UI/Card.tsx";
import Form from "./form/Form.tsx";
import styles from "./App.module.css";
import Person from "./classes/Person.tsx";

const App = () => {
  const [persons, updatePersons] = useState<Person[]>([]);

  const submitValuesHandler = (username: string, age: string) => {
    updatePersons((prev) => [...prev, new Person(username, age)]);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <Card>
          <Form onSubmitValues={submitValuesHandler} />
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
  );
};

export default App;
