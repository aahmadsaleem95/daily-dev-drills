async function getData() {
  return await Promise.resolve("👦");
}

const data = getData();
console.log(data);
data.then((res) => console.log({ res }));
