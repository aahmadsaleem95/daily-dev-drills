function showModal() {
  console.log(showModal.timeout);
}

showModal(); // undefined
showModal.timeout = 200;

showModal.timeout = 100;
showModal(); // 100
