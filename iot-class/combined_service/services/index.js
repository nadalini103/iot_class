class SharedData {
	messages;

	constructor(){
		this.messages = [];
	}

	addMessage(message){
		this.messages.push(message);
	}

	clearMessages() {
		this.messages = [];
	}
}

module.exports = SharedData;
