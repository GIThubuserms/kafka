import { Kafka } from "kafkajs";
import client from "./client.js";



async function init(){

    const admin=client.admin()
    console.log("Admin connecting...");
    admin.connect();

    await admin.createTopics({
        topics:[
            {
                topic:"rider_updates",
                numPartitions:2,
            }
        ]
    })

    console.log("Admin disconnecting...");

    await admin.disconnect();
}


init()