import client from "./client.js";





async function init(){

    const consumer=client.consumer({groupId:"1"})

    await consumer.connect()


    await consumer.subscribe({topics:["rider-updates"],fromBeginning:true})


    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
          console.log(
            `${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
          );
        },
      });

}

init()