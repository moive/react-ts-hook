import { useEffect, useRef, useState } from "react";

type TypeTimer = {
	millisecond: number;
};

export const Timer = ({ millisecond }: TypeTimer) => {
	const [second, setSecond] = useState(0);
	const ref = useRef<number>();
	console.log(millisecond);
	useEffect(() => {
		ref.current && clearInterval(ref.current);
		ref.current = setInterval(() => setSecond((s) => s + 1), millisecond);
	}, [millisecond]);

	return (
		<div>
			<h4>
				Timer: <small>{second}</small>
			</h4>
		</div>
	);
};
