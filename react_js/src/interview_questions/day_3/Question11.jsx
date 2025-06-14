import React, { useEffect } from "react";

export const Question11 = () => {
  // when we have to remove a event listener we need to pass the function reference of the one which was binded initially but in the below case we are giving a new function while removing it. That's why it does not gets removed
  //   useEffect(() => {
  //     document.addEventListener("click", () => {
  //       console.log("Document Clicked");
  //     });
  //     return () => {
  //       document.removeEventListener("click", () => {
  //         console.log("Document Clicked");
  //       });
  //     };
  //   }, []);

  // solution
  function handleDocumentClick() {
    console.log("Document Clicked");
  }
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return <div>Try Clicking on Anywhere</div>;
};
