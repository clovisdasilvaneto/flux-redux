export class Store {
	constructor(dispatcher){
		this.__listerners = [];
		this.__state = this.getInitialState();
		dispatcher.register(this.__onDispatch.bind(this));
	}
	
	__onDispatch(){
		throw new Error("Subclasses must override __onDispatch method of a Flux Store");
	}
	
	getInitialState(){
		throw new Error("Subclasses must override getInitialState method of a Flux Store");
		
	}
	
	addListener(listener){
		this.__listerners.push(listener);
	}
	
	__emitChange(){
		this.__listerners.forEach(listener => listener(this.__state));
	}
}