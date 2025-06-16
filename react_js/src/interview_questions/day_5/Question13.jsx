import { useCallback } from "react";

// As per react you can wrap any function in callback as there is no harm but as a readability you should only wrap those functions in callback which are passed to another component as a prop
const Question13 = () => {
  const a = useCallback(() => {}, []);
  const b = () => {};
  return (
    <div>
      <Product a={a} />
    </div>
  );
};
const Product = ({ a }) => {
  return <div> Hello</div>;
};
export default Question13;
