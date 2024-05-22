const config = {
  rabbitMQ: {
    url: "amqp://localhost",
    exchangeName: "logExchange",
    exchangeType : "direct",
    routeKey : 'consumer2_key',
    queueName :  'consumer2_key',
    
  }
};

export default config;
