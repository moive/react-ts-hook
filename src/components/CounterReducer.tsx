import { useReducer } from "react";

const initialState = {
	counter: 0,
};

type ActionType =
	| { type: "increment" }
	| { type: "decrement" }
	| { type: "custom"; payload: number };

const counterRed = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + 1,
			};
		case "decrement":
			return {
				...state,
				counter: state.counter - 1,
			};
		case "custom":
			return {
				...state,
				counter: action.payload,
			};
		default:
			return state;
	}
};

export const CounterReducer = () => {
	const [{ counter }, dispatch] = useReducer(counterRed, initialState);

	return (
		<>
			<h2>Counter: {counter}</h2>
			<button
				onClick={() => dispatch({ type: "increment" })}
				className="btn btn-outline-primary"
			>
				+1
			</button>
			<button
				onClick={() => dispatch({ type: "decrement" })}
				className="btn btn-outline-warning"
			>
				-1
			</button>
			<button
				onClick={() => dispatch({ type: "custom", payload: 100 })}
				className="btn btn-outline-danger"
			>
				100
			</button>
		</>
	);
};
