export const Question3 = () => {
  const data = [];
  // The first line will return zero which is kind of a bug as when ever we conditionally render a component the react expects a true or false but data.length return a number
  return (
    <>
      <div>{data.length && <h1>Product List</h1>}</div>
      <div>{data.length > 0 && <h1>Product List</h1>}</div>
      <div>{!!data.length && <h1>Product List</h1>}</div>
    </>
  );
};
