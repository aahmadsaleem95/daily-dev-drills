import React from "react";

export const Question5 = () => {
  // if(true){
  //     console.log("inside if");
  // }
  // it will give syntax error as direct if else in not allowed in jsx syntax valid expression how to check if it is directly console.log in the browser
  return (
    <div>
      {console.log("Hello")}
      {true ? console.log("Hello") : null}
    </div>
  );
};
