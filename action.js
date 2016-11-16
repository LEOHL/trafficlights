import {types,colors} from "./const.js";
const changeRed = ()=>({
    type:types.CHANGE_RED
});
const changeGreen = ()=>({
    type:types.CHANGE_GREEN
});
const changeYellow = ()=>({
    type:types.CHANGE_YELLOW
});

const LightActions = {changeRed,changeGreen,changeYellow};

export{changeRed,changeGreen,changeYellow,LightActions};