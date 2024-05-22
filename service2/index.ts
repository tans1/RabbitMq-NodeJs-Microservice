import express, {Request, Response} from 'express';
import { Producer } from './rabbitMq/producer';
import { Consumer } from './rabbitMq/consumer';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({}))

const producer = new Producer();
const consumer = new Consumer();
consumer.consumeMessages()

app.post('/', (req : Request, res : Response) => {
    const routingKey = req.body.routingKey;
    const message = req.body.message;
    producer.publishMessage(routingKey,message);
    res.send("Hello world");
})


app.listen(4000)

