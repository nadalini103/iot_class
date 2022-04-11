const mqtt = require('mqtt')
const fs = require('fs')

const options = {
  port: 8883,
  host: 'aspvpxjmfalxx-ats.iot.us-east-1.amazonaws.com',
  key: fs.readFileSync('client.key'),
  cert: fs.readFileSync('client.crt'),
  ca: fs.readFileSync('ca.crt'),
  protocol: 'mqtts'
}

const mqttClient  = mqtt.connect(options)

mqttClient.on('connect', function () {
  mqttClient.subscribe('iot/#')
})

let messages = [];

mqttClient.on('message', function (topic, message) {
  messages.push(message.toString());
  console.log(message.toString());
})
