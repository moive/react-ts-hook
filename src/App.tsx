import { Counter } from "./components/Counter";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";
import "./sass/site.scss";
import { CounterReducer } from "./components/CounterReducer";
function App() {
	return (
		<>
			<h1>React + Typescript</h1>
			<hr />
			<Counter />
			<User />
			<h2>useEffect - useRef</h2>
			<hr />
			<TimerParent />
			<h2 className="mt-5">Counter Reducer</h2>
			<hr />
			<CounterReducer />
		</>
	);
}

export default App;
