/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(4);

	var _reactRedux = __webpack_require__(5);

	var _const = __webpack_require__(6);

	var _action = __webpack_require__(7);

	var _redux2 = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	var Light = function Light(_ref) {
		var color = _ref.color;

		var style = {
			width: '80px',
			height: '80px',
			borderRadius: '50%',
			border: '1px solid #ccc',
			boxShadow: 'inset 0 15px 20px black',
			backgroundColor: color
		};
		return _react2.default.createElement('div', { style: style });
	};

	var TranfficLight = function (_Component) {
		_inherits(TranfficLight, _Component);

		function TranfficLight() {
			_classCallCheck(this, TranfficLight);

			var _this = _possibleConstructorReturn(this, (TranfficLight.__proto__ || Object.getPrototypeOf(TranfficLight)).call(this));

			_this.timeId = null;
			_this.state = {
				count: 0
			};

			return _this;
		}

		_createClass(TranfficLight, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.autoChange();
			}
		}, {
			key: 'autoChange',
			value: function autoChange() {
				var _this2 = this;

				var c = ++this.state.count;
				this.setState({
					count: c
				});
				var _props = this.props,
				    light = _props.light,
				    actions = _props.actions;

				if (c > light.time) {
					this.state.count = 0;
					this.changeColor(light, actions);
				}
				this.timeId = setTimeout(function () {
					_this2.autoChange();
				}, 1000);
			}
		}, {
			key: 'changeColor',
			value: function changeColor(light, actions) {
				switch (light.color) {
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
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearInterval(this.timeId);
			}
		}, {
			key: 'render',
			value: function render() {
				var style = {
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					width: '140px',
					height: '328px',
					borderRadius: '40px',
					backgroundColor: 'black',
					boxShadow: '2px 2px 4px #333'
				};
				var _props2 = this.props,
				    light = _props2.light,
				    actions = _props2.actions;

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ style: style },
						_react2.default.createElement(Light, { color: light.red ? _const.colors.lightRed : _const.colors.darkRed }),
						_react2.default.createElement(Light, { color: light.yellow ? _const.colors.lightYellow : _const.colors.darkYellow }),
						_react2.default.createElement(Light, { color: light.green ? _const.colors.lightGreen : _const.colors.darkGreen })
					),
					_react2.default.createElement(
						'h1',
						null,
						this.state.count
					)
				);
			}
		}]);

		return TranfficLight;
	}(_react.Component);

	//只要 Redux store 发生改变，mapStateToProps 函数就会被调用
	//将Store的state赋值给组件的props.light


	var mapStateToProps = function mapStateToProps(state) {
		return {
			light: state
		};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)(_action.LightActions, dispatch)
		};
	};

	TranfficLight = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranfficLight);

	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _redux2.store },
		_react2.default.createElement(TranfficLight, null)
	), document.querySelector("#container"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendors;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(34);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(172);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(193);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var types = {
	    CHANGE_RED: 'CHANGE_RED',
	    CHANGE_GREEN: 'CHANGE_GREEN',
	    CHANGE_YELLOW: 'CHANGE_YELLOW'
	};

	var colors = {
	    lightRed: '#ff0000',
	    lightYellow: '#ffff00',
	    lightGreen: '#00ff00',
	    darkRed: '#4d0000',
	    darkYellow: '#5b5b00',
	    darkGreen: '#007500'
	};
	exports.types = types;
	exports.colors = colors;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LightActions = exports.changeYellow = exports.changeGreen = exports.changeRed = undefined;

	var _const = __webpack_require__(6);

	var changeRed = function changeRed() {
	    return {
	        type: _const.types.CHANGE_RED
	    };
	};
	var changeGreen = function changeGreen() {
	    return {
	        type: _const.types.CHANGE_GREEN
	    };
	};
	var changeYellow = function changeYellow() {
	    return {
	        type: _const.types.CHANGE_YELLOW
	    };
	};

	var LightActions = { changeRed: changeRed, changeGreen: changeGreen, changeYellow: changeYellow };

	exports.changeRed = changeRed;
	exports.changeGreen = changeGreen;
	exports.changeYellow = changeYellow;
	exports.LightActions = LightActions;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = exports.light = exports.initState = undefined;

	var _redux = __webpack_require__(4);

	var _const = __webpack_require__(6);

	var initState = {
	    color: 'red',
	    red: true,
	    green: false,
	    yellow: false,
	    time: 10
	};

	var light = function light() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    switch (action.type) {
	        case _const.types.CHANGE_RED:
	            return {
	                color: 'red',
	                red: true,
	                green: false,
	                yellow: false,
	                time: 10
	            };
	        case _const.types.CHANGE_GREEN:
	            return {
	                color: 'green',
	                red: false,
	                green: true,
	                yellow: false,
	                time: 12
	            };
	        case _const.types.CHANGE_YELLOW:
	            return {
	                color: 'yellow',
	                red: false,
	                green: false,
	                yellow: true,
	                time: 2
	            };
	        default:
	            return state;
	    }
	};

	var store = (0, _redux.createStore)(light);

	exports.initState = initState;
	exports.light = light;
	exports.store = store;

/***/ }
/******/ ]);