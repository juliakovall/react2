console.log("#56. JavaScript homework example file");

function asyncOperationDemo(callback) {
  console.log("Перший виклик");

  process.nextTick(() => {
    console.log("Виконано nextTick");
    callback("nextTick");
  });

  setImmediate(() => {
    console.log("Виконано setImmediate");
    callback("setImmediate");
  });

  setTimeout(() => {
    console.log("Виконано setTimeout");
    callback("setTimeout");
  }, 0);

  console.log("Останній виклик");
}

asyncOperationDemo((operation) => {
  console.log(`Завершено виконання: ${operation}`);
});

export { asyncOperationDemo };
