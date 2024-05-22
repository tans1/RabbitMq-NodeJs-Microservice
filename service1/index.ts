import express, {Request, Response} from 'express';
import { Producer } from './rabbitMq/producer';
import { Consumer } from './rabbitMq/consumer';

const app = express();

const producer = new Producer();
const consumer = new Consumer();
consumer.consumeMessages()

app.get('/', (req : Request, res : Response) => {
    const routingKey = req.body.routingKey;
    const message = req.body.message;
    producer.publishMessage(routingKey,message);
    res.send("Hello world")
})


app.listen(3000)

