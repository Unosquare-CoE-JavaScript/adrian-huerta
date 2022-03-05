console.log("Hello from main.js");

const worker = new Worker("worker.js");

worker.onmessage = (msg) => {
  console.log("message received from worker", msg.data);
};

worker.postMessage("message sent to worker");

console.log("Hello from end of main.js");
