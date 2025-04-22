import { Kafka } from "kafkajs";
import client from "./client.js";

async function init() {
  const producer = client.producer();

  await producer.connect();

  await producer.send({
    topic: "rider_updates",
    messages: [
      {
        value:JSON.stringify({
          name: "ali jamshed",
          loc: "Wapdatown",
          Axis: "124e--23w",
        }),
      },
    ],
  });
console.log("Producer disconnected");

  await producer.disconnect();
}

init();
