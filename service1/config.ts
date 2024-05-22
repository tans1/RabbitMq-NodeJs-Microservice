const config = {
  rabbitMQ: {
    url: "amqp://localhost",
    exchangeName: "logExchange",
    exchangeType : "direct",
    routeKey : 'consumer1_key',
    queueName :  'consumer1_key',
  }
};

export default config;
