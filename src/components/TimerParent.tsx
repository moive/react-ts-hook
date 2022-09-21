import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimerParent = () => {
	const [millisecond, setMillisecond] = useState(1000);
	return (
		<div>
			<span>Milliseconds: {millisecond}</span>
			<br />
			<button
				className="btn btn-outline-success"
				onClick={() => setMillisecond(1000)}
			>
				1000
			</button>
			<button
				className="btn btn-outline-success"
				onClick={() => setMillisecond(2000)}
			>
				2000
			</button>

			<Timer millisecond={millisecond} />
		</div>
	);
};
