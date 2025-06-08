import { useState } from "react";

export const Question2 = () => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow((p) => !p);
  }
  // we should try to avoid conditionals in jsx instead use variables to enhance the readability of the code as the components grows
  const divClassName = show ? "show-content" : "";
  const message = show ? "Bye" : "Hi";
  return (
    <div className={`${divClassName}`}>
      <button onClick={handleClick}>Oye</button>
      <h1>{message}</h1>
    </div>
  );
};
