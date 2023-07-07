// From 00:46:49 to 00:59:17

import {combineReducers, createStore} from "redux";

function CombineReducer() {
    const initialState = {
        users: [
            { id: 1, name: "Steve" },
            { id: 2, name: "Eric" }
        ],
        tasks: [
            { title: "File the TPS reports" },
            { title: "Order more energy drinks" }
        ]
    };


    const ADD_USER = "ADD_USER";
    const ADD_TASK = "ADD_TASK";

    const addTask = (title) => ({ type: ADD_TASK, payload: title });
    const addUser = (name) => ({ type: ADD_USER, payload: name });

    const userReducer = (users= initialState.users, action) => {
        if (action.type === ADD_USER) {
            return [...users, action.payload]
        }

        return users;
    };

    const taskReducer = (tasks = initialState.tasks, action) => {
        if (action.type === ADD_TASK) {
            return [...tasks, action.payload]
        }

        return tasks;
    };

    const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

    const store = createStore(reducer, initialState);

    console.log(store.getState());

    return (
        <div className="App">
            123
        </div>
    );
}

export default CombineReducer;
