import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import {types,colors} from "./const.js";
import {changeRed,changeGreen,changeYellow,LightActions} from "./action.js"
import {initState,light,store} from "./redux.js"
//const
//const types = {
//	CHANGE_RED:'CHANGE_RED',
//	CHANGE_GREEN:'CHANGE_GREEN',
//	CHANGE_YELLOW:'CHANGE_YELLOW'
//};
//
//const colors = {
//	lightRed:'#ff0000',
//	lightYellow:'#ffff00',
//	lightGreen:'#00ff00',
//	darkRed: '#4d0000',
//	darkYellow:'#5b5b00',
//	darkGreen:'#007500',
//}

//actions
//const changeRed = ()=>({
//	type:types.CHANGE_RED
//});
//const changeGreen = ()=>({
//	type:types.CHANGE_GREEN
//});
//const changeYellow = ()=>({
//	type:types.CHANGE_YELLOW
//});
//
//const LightActions = {changeRed,changeGreen,changeYellow};


//redux
//const initState = {
//	color:'red',
//	red:true,
//	green:false,
//	yellow:false,
//	time:10
//};
//
//const light = (state = initState,action)=>{
//	switch(action.type){
//		case types.CHANGE_RED:
//			return {
//				color:'red',
//				red:true,
//				green:false,
//				yellow:false,
//				time:10
//			}
//		case types.CHANGE_GREEN:
//			return {
//				color:'green',
//				red:false,
//				green:true,
//				yellow:false,
//				time:12
//			}
//		case types.CHANGE_YELLOW:
//			return {
//				color:'yellow',
//				red:false,
//				green:false,
//				yellow:true,
//				time:2
//			}
//		default:
//			return state;
//	}
//}
//
//const store = createStore(light);

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

	constructor(){
		super();
		this.timeId = null;
		this.state = {
			count : 0
		}
		 
	}

	componentDidMount(){
	     this.autoChange();
	}

	autoChange(){
		let c = ++this.state.count;
		this.setState({
			count:c
		});
		const { light,actions} = this.props;
		if(c > light.time){
			this.state.count = 0;
			this.changeColor(light,actions);
		}
		this.timeId = setTimeout(()=>{
			this.autoChange();
		},1000);
	}

	changeColor(light,actions){
		switch(light.color){
			case 'red':
				actions.changeGreen(); 
				break;
			case 'green':
				actions.changeYellow();
				break;
			case 'yellow':
				actions.changeRed(); 
				break;
			default:
				actions.changeRed(); 
					 
		}
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
		const {light,actions} = this.props;
		return (
			<div>
				<div style={style}>
					<Light color={light.red?colors.lightRed:colors.darkRed} />
					<Light color={light.yellow?colors.lightYellow:colors.darkYellow} />
					<Light color={light.green?colors.lightGreen:colors.darkGreen} />
				</div>
				<h1>{this.state.count}</h1>
			</div>
		)
	}
}

//只要 Redux store 发生改变，mapStateToProps 函数就会被调用
//将Store的state赋值给组件的props.light
const mapStateToProps = (state)=> ({
	light:state
});

const mapDispatchToProps = (dispatch) => ({
	actions:bindActionCreators(LightActions,dispatch)
})

TranfficLight = connect(mapStateToProps,mapDispatchToProps)(TranfficLight);

ReactDOM.render((
	<Provider store={store}>
		<TranfficLight />
	</Provider>
),document.querySelector("#container"));



