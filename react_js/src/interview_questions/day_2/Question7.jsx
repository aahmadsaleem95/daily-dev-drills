export const Question7 = () => {
  const scoreA = 100;
  const scoreB = 0;
  return (
    <div>
      {scoreA && <h1>AWon</h1>}
      {scoreB && <h1>BWon</h1>}

      {scoreA > 0 && <h1>AWon</h1>}
      {!!scoreB && <h1>BWon</h1>}
    </div>
  );
};
