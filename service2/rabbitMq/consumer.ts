//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel
//step 3 : Create the exchange
//step 4 : Create the queue
//step 5 : Bind the queue to the exchange
//step 6 : Consume messages from the queue

import { ConsumeMessage } from "amqplib";
import config from "../config";
import { ChannelClass } from "./base";

export class Consumer extends ChannelClass {
    
    async consumeMessages () {
        await this.createChannel()

        const exchangeName = config.rabbitMQ.exchangeName;

        await this.channel?.assertQueue(config.rabbitMQ.queueName);

        await this.channel?.bindQueue(config.rabbitMQ.queueName,config.rabbitMQ.exchangeName,config.rabbitMQ.routeKey)

        await this.channel?.consume(config.rabbitMQ.queueName,(msg : ConsumeMessage | null) => {
            if (!msg){
                return "error occurred"
            }
            console.log("from the service 2 consumer")
            console.log(JSON.parse(msg.content.toString()))
        })
    }


}