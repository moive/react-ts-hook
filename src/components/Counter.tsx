import { useState } from "react";
export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = (val: number = 1): void =>
		setCounter(counter + val);

	return (
		<div className="mt-5">
			<h3>Counter:</h3>
			<span>Valor: {counter}</span>

			<br />
			<button
				onClick={() => incrementCounter()}
				className="btn btn-outline-primary mt-2"
			>
				+1
			</button>
			<button
				onClick={() => incrementCounter(2)}
				className="btn btn-outline-primary mt-2"
			>
				+2
			</button>
			<button
				onClick={() => setCounter(0)}
				className="btn btn-outline-danger mt-2"
			>
				RESET
			</button>
		</div>
	);
};
