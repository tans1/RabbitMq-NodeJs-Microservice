npm init --y

npm i express

npm i -D typescript @types/express @types/node nodemon ts-node


npx tsc --init

# tsconfig.json
#  "outDir": "./dist"
: '

package.json

"build": "npx tsc",
"start": "node dist/index.js",
"dev": "nodemon index.ts"
'


npm i amqplib


# Pull the official RabbitMQ image:
docker pull rabbitmq:3-management


# Start a RabbitMQ instance:
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
