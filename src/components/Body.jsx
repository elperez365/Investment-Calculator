import { useState } from "react";
import UserInput from "./UserInput";
import { Parameters } from "../util/classes";
import Result from "./Result";

export default function Body() {
  const [fields, setFields] = useState(new Parameters(10000, 1200, 6, 10));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFields((prev) => ({ ...prev, [name]: +value }));
  };

  return (
    <>
      <UserInput handleChange={handleChange} fields={fields} />
      <Result fields={fields} />
    </>
  );
}
