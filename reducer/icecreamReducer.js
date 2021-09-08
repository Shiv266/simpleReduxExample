const actionTypes = require("../action/iceCream");

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case actionTypes.value.BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

module.exports = { iceCreamReducer };
