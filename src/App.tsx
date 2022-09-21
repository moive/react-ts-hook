import { Counter } from "./components/Counter";
import { User } from "./components/User";
import "./sass/site.scss";
function App() {
	return (
		<>
			<h1>React + Typescript</h1>
			<hr />
			<Counter />
			<User />
		</>
	);
}

export default App;
