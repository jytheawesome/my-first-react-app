import { useState } from "react";
import Username from "./fields/Username.tsx";
import Age from "./fields/Age.tsx";
import SubmitButton from "./AddUserButton.tsx";

interface Props {
  submitValues: (username: string, age: string) => void;
}

const Form = (props: Props) => {
  const [usernameValue, setUsername] = useState("");
  const [ageValue, setAge] = useState("");

  const updateUsernameHandler = (username: string) => {
    setUsername(username);
  };
  const updateAgeHandler = (age: string) => {
    setAge(age);
  };

  const submitValuesHandler = () => {
    props.submitValues(usernameValue, ageValue);
  };

  return (
    <>
      <Username onUpdateUsername={updateUsernameHandler} />
      <Age onUpdateAge={updateAgeHandler} />
      <SubmitButton onSubmitValues={submitValuesHandler} />
    </>
  );
};

export default Form;
