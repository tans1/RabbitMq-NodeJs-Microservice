import amqp, { Channel } from "amqplib";
import  config from '../config';

export class ChannelClass {

    public channel:Channel | undefined;

    async createChannel() {
        if (!this.channel){
            const connection = await amqp.connect(config.rabbitMQ.url);
            this.channel = await connection.createChannel()
            
            const exchangeName = config.rabbitMQ.exchangeName;
            await this.channel?.assertExchange(exchangeName, config.rabbitMQ.exchangeType);
    
        }
    }
}