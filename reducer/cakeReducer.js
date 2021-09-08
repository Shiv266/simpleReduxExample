const actionTypes = require("../action/cake");

const initialCakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case actionTypes.value.BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

module.exports = { cakeReducer };
