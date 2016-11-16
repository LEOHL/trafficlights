import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//const
const types = {
	CHANGE_RED:'CHANGE_RED',
	CHANGE_GREEN:'CHANGE_GREEN',
	CHANGE_YELLOW:'CHANGE_YELLOW'
};

const colors = {
	lightRed:'#ff0000',
	lightYellow:'#ffff00',
	lightGreen:'#00ff00',
	darkRed: '#4d0000',
	darkYellow:'#5b5b00',
	darkGreen:'#007500',
}

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
	color:'red',
	red:true,
	green:false,
	yellow:false
};

const light = (state = initState,action)=>{
	switch(action.type){
		case types.CHANGE_RED:
			return {
				color:'red',
				red:true,
				green:false,
				yellow:false
			}
		case types.CHANGE_GREEN:
			return {
				color:'green',
				red:false,
				green:true,
				yellow:false
			}
		case types.CHANGE_YELLOW:
			return {
				color:'yellow',
				red:false,
				green:false,
				yellow:true
			}
		default:
			return state;
	}
}

const store = createStore(light);

//component
const Light = ({color}) => {
	let style = {
		width:'80px',
		height:'80px',
		borderRadius: '50%',
		border:'1px solid #ccc',	
		boxShadow:'inset 0 15px 20px black',
		backgroundColor:color
	}
	return (
		<div style={style}></div>
	)
}

class TranfficLight extends Component {

	componentDidMount(){
	     
		this.timeId = setInterval(() => {
			switch(this.props.light.color){
				case 'red':
					store.dispatch(changeGreen());
					break;
				case 'green':
					store.dispatch(changeYellow());
					break;
				case 'yellow':
					store.dispatch(changeRed());
					break;
				default:
					store.dispatch(changeRed());
			}
		},5000);
	}

	componentWillUnmount(){
		clearInterval(this.timeId);
	}

	render(){
		let style = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '140px',
			height: '328px',
			borderRadius:'40px',
			backgroundColor: 'black',
			boxShadow:'2px 2px 4px #333'
		};
		const {light} = this.props;
		return (
			<div style={style}>
				<Light color={light.red?colors.lightRed:colors.darkRed} />
				<Light color={light.yellow?colors.lightYellow:colors.darkYellow} />
				<Light color={light.green?colors.lightGreen:colors.darkGreen} />
			</div>
		)
	}
}

const render = ()=> {
	ReactDOM.render(<TranfficLight light={store.getState()}/>,document.querySelector('#container'));
}

store.subscribe(render);
render();




