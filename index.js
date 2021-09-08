const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const cakeReducer = require("./reducer/cakeReducer");
const iceCreamReducer = require("./reducer/icecreamReducer");
const buyCake = require("./action/cake");
const buyIceCream = require("./action/iceCream");

const rootReducer = combineReducers({
  cake: cakeReducer.cakeReducer,
  iceCream: iceCreamReducer.iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake.value.buyCake());
store.dispatch(buyIceCream.value.buyIceCream());
unsubscribe();
