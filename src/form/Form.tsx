import { useState, FormEvent } from "react";

interface Props {
  submitValues: (username: string, age: string) => void;
}

const Form = (props: Props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitValuesHandler = (event: FormEvent) => {
    event.preventDefault();
    props.submitValues(username, age);
  };

  return (
    <form onSubmit={submitValuesHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-control"
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          className="form-control"
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        {" "}
        Add User{" "}
      </button>
    </form>
  );
};

export default Form;
