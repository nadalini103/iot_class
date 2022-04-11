const express = require('express');
const bodyParser = require('body-parser');

class ExpressApp {
	app;
	data;
	constructor(data){
		this.data = data;

		this.app = express();
		this.app.use(bodyParser.json());
		this.app.use(express.static('public'))
	}

	buildRoute(){
		this.app.get('/messages', (req,res) => (this.respondMessages(req, res, this.data)))
	}

	startListening(){
		this.app.listen(80, function() { console.log("App listening on port 80") })
	}

	respondMessages(req, res, data){
		let messages = data.get()
		res.json(messages)
	}

}


module.exports = ExpressApp;
