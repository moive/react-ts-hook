import { Counter } from "./components/Counter";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";
import "./sass/site.scss";
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
		</>
	);
}

export default App;
