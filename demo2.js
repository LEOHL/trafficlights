import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//const
const colors = {
	lightRed:'#ff0000',
	lightYellow:'#ffff00',
	lightGreen:'#00ff00',
	darkRed: '#4d0000',
	darkYellow:'#5b5b00',
	darkGreen:'#007500',
}
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
		return (
			<div style={style}>
				<Light color={colors.lightRed} />
				<Light color={colors.darkYellow} />
				<Light color={colors.darkGreen} />
			</div>
		)
	}
}

ReactDOM.render(<TranfficLight />,document.querySelector('#container'));


