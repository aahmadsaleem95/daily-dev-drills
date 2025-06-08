export const Question1 = () => {
  const items = [1, 2, 3, 4, 5];
  // As we know about the key prop in react which is used to update the dom and other stuff but can we use index as a key prop if the list is static then yes. But if you have to perform edit, delete or reorder then never use index as key prop instead use a unique id as key
  return (
    <>
      {items?.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
};
