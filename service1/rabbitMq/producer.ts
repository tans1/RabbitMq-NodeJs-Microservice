//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message to the exchange with a routing key

import { ChannelClass } from './channel';
import amqp, { Channel } from "amqplib";
import  config from '../config';

export class Producer extends ChannelClass {

    async publishMessage(routingKey : string, message : any) {
        await this.createChannel();
    
        const exchangeName = config.rabbitMQ.exchangeName;

        const logDetails = {
          logType: routingKey,
          message: message,
          dateTime: new Date(),
        };
        await this.channel?.publish(
          exchangeName,
          routingKey,
          Buffer.from(JSON.stringify(logDetails))
        );
    
        console.log(
          `The new ${routingKey} log is sent to exchange ${exchangeName}`
        );
      }
}