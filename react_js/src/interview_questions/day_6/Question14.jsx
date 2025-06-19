import { useRef, useState } from "react";

export const Question14 = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleMouseDown = (operation) => {
    if (operation === "add") {
      intervalRef.current = setInterval(increment, 100);
    } else if (operation === "sub") {
      intervalRef.current = setInterval(decrement, 100);
    }
  };
  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={decrement}
        onMouseDown={() => handleMouseDown("sub")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        -
      </button>
      <button
        onClick={increment}
        onMouseDown={() => handleMouseDown("add")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        +
      </button>
    </div>
  );
};
