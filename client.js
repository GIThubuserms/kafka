import { Kafka } from "kafkajs";


 const client=new Kafka({
    clientId:"my-foodpapa",
    brokers:['192.168.1.6:9092']
})

export default client
