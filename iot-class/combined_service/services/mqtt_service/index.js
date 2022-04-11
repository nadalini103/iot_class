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

class MQTT_Service{
	mqttClient;

	constructor(messages){
		this.mqttClient = mqtt.connect(options)
		this.mqttClient.subscribe('iot/#')

		this.mqttClient.on('message', function (topic, message) {
		  messages.add(message.toString());
		})
	}
}

module.exports = MQTT_Service;
