import {useState, useRef, FormEvent} from "react";

interface Props {
  submitValues: (username: string, age: string) => void;
}

const Form = (props: Props) => {
  const usernameValue = useRef<HTMLInputElement>(null!);
  const ageValue = useRef<HTMLInputElement>(null!);

  const submitValuesHandler = (event: FormEvent) => {
    event.preventDefault();
    props.submitValues(usernameValue.current.value, ageValue.current.value);
    usernameValue.current.value = "";
    ageValue.current.value = "";
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
          ref={usernameValue}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input className="form-control" id="age" type="number" ref={ageValue} />
      </div>
      <button className="btn btn-primary" type="submit">
        Add User
      </button>
    </form>
  );
};

export default Form;
