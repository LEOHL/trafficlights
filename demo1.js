const Redux = require('redux');
const { createStore } = Redux;

//const
const types = {
	CHANGE_RED:'CHANGE_RED',
	CHANGE_GREEN:'CHANGE_GREEN',
	CHANGE_YELLOW:'CHANGE_YELLOW'
};

//actions
const changeRed = ()=>({
	type:types.CHANGE_RED
});
const changeGreen = ()=>({
	type:types.CHANGE_GREEN
});
const changeYellow = ()=>({
	type:types.CHANGE_YELLOW
});


//redux
const initState = {
	red:true,
	green:false,
	yellow:false
};

const light = (state = initState,action)=>{
	switch(action.type){
		case types.CHANGE_RED:
			return {
				red:true,
				green:false,
				yellow:false
			}
		case types.CHANGE_GREEN:
			return {
				red:false,
				green:true,
				yellow:false
			}
		case types.CHANGE_YELLOW:
			return {
				red:false,
				green:false,
				yellow:true
			}
		default:
			return state;
	}
}

const store = createStore(light);
const log = () => {
	console.log("current state");
	console.log(store.getState());
	console.log("--------------");
}
store.subscribe(log);

store.dispatch(changeRed());
store.dispatch(changeYellow());
store.dispatch(changeGreen());
