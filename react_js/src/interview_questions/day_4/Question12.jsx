import { useEffect } from "react";

export const Question12 = () => {
  // This approach is used if I had alot of eventhanlder and I want to remove all of them once the component is unmounted or removed from the dom.
  useEffect(() => {
    const controller = new AbortController();
    document.addEventListener(
      "click",
      () => {
        console.log("Document Clicked");
      },
      {
        signal: controller.signal,
      }
    );

    return () => {
      controller.abort();
    };
  }, []);
  return <div>Try Clicking on Anywhere</div>;
};
