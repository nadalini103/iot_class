const ExpressApp = require('./services/http_server');
const MqttClient = require('./services/mqtt_service');
const SharedData = require('./services/shared_data');

let messages = new SharedData();

let mqtt_client = new MqttClient(messages);

let http_server = new ExpressApp(messages);

http_server.buildRoute();
http_server.startListening();
