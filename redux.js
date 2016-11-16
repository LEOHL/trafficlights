import { createStore,bindActionCreators } from 'redux';
import {types,colors} from "./const.js";
const initState = {
    color:'red',
    red:true,
    green:false,
    yellow:false,
    time:10
};

const light = (state = initState,action)=>{
    switch(action.type){
        case types.CHANGE_RED:
            return {
                color:'red',
                red:true,
                green:false,
                yellow:false,
                time:10
            }
        case types.CHANGE_GREEN:
            return {
                color:'green',
                red:false,
                green:true,
                yellow:false,
                time:12
            }
        case types.CHANGE_YELLOW:
            return {
                color:'yellow',
                red:false,
                green:false,
                yellow:true,
                time:2
            }
        default:
            return state;
    }
}

const store = createStore(light);

export {initState,light,store};