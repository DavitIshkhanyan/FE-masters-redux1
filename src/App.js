//    To 00:46:49

import './App.css';
import useCompose from "./useCompose";
import {bindActionCreators, compose, createStore} from "redux";

function App() {
    // useCompose();

    const initialState = { value: 0 };

    const INCREMENT = "INCREMENT";
    const ADD = "ADD";

    const incrementAction = { type: INCREMENT };

    const increment = () => ({ type: INCREMENT });
    const add = (amount) => ({ type: ADD, payload: amount });

    const reducer = (state = initialState, action) => {
        if (action.type === INCREMENT) {
            return { value: state.value + 1 };
        }

        if (action.type === ADD) {
            return { value: state.value + action.payload}
        }

        return state;
    };

    const store = createStore(reducer);

    const subscriber = () => {console.log("SUBSCRIBER", store.getState())};

    store.subscribe(subscriber);

    const actions = bindActionCreators({ increment, add }, store.dispatch);

    const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) => compose(store.dispatch, fn));  // bindActionCreators implementation

    actions.add(1000);
    actions.increment();

    // store.dispatch(increment());
    // store.dispatch(increment());
    // store.dispatch(add(1000));

    // console.log(store.getState());

    // console.log(store);

    return (
    <div className="App">
        123
    </div>
);
}

export default App;
