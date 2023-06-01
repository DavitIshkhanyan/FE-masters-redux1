import './App.css';
import useCompose from "./useCompose";
import {createStore} from "redux";
// import use

function App() {
    // useCompose();

    const initialState = { value: 0 };

    const INCREMENT = "INCREMENT";
    const ADD = "ADD";

    const incrementAction = { type: INCREMENT };

    const increment = () => ({ type: INCREMENT });
    const add = (amount) => ({ type: ADD, payload: amount });

    const reducer = (state, action) => {
        if (action.type === INCREMENT) {
            return { value: state.value + 1 };
        }

        if (action.type === ADD) {
            return { value: state.value + state.payload}
        }

        return state;
    };

    const store = createStore(reducer);

    console.log(store)

    return (
    <div className="App">
        123
    </div>
);
}

export default App;
