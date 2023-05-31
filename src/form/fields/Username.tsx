import React, { useState, ChangeEvent } from "react";

interface Props {
  onUpdateUsername: (value: string) => void;
}

const Username = (props: Props) => {
  const [inputUsername, setUsername] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    props.onUpdateUsername(event.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Username</label>
      <input
        type="text"
        value={inputUsername}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Username;
