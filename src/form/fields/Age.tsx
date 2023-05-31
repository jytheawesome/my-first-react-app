import React, { useState, ChangeEvent } from "react";

interface Props {
  onUpdateAge: (value: string) => void;
}

const Age = (props: Props) => {
  const [inputAge, setAge] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
    props.onUpdateAge(event.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Age (Years)</label>
      <input
        type="number"
        value={inputAge}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Age;
