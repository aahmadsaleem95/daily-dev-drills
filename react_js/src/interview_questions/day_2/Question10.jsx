// import { useEffect, useState } from "react";

export const Question10 = ({ itemCount }) => {
  // we have over used useState and useEffect
  //     const [discount, setDiscount] = useState(0);
  //   useEffect(() => {
  //     setDiscount(itemCount * 1.5);
  //   }, [itemCount]);
  const discount = itemCount * 1.5;

  return <h1> Discount Give ${discount} </h1>;
};
