class SharedData {
	data;
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
	}

	get(){
		return this.data;
	}

	clear() {
		this.data = [];
	}
}

module.exports = SharedData;
