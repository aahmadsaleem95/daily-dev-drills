export const Question4 = () => {
  const data = [1, 2, 3, 4];
  return (
    <>
      <div>
        {data &&
          data.length &&
          data.map((d) => {
            <h1 key={d}>{d}</h1>;
          })}
      </div>
      <hr />

      <div>
        {data &&
          data.length &&
          data.map((d) => {
            return <h1 key={d}>{d}</h1>;
          })}
      </div>
      <hr />
      <div>{data && data.length && data.map((d) => <h1 key={d}>{d}</h1>)}</div>
    </>
  );
};
