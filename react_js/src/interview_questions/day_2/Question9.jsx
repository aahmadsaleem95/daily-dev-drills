import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

export const Question9 = () => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(100);

  console.log("Question 9 Re-rendering.");
  return (
    <div style={{ textAlign: "center" }}>
      <span>Score is {score}</span>
      <br />
      <span>Count is {count}</span>
      <br />
      <button
        onClick={() =>
          setTimeout(() => {
            // since we are using react 18 plus so it has this feature automatically
            unstable_batchedUpdates(() => {
              setScore(100);
              setCount(1200);
            });
          })
        }
      >
        Update State
      </button>
    </div>
  );
};
