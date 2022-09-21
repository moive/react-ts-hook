import { useState } from "react";

interface IUser {
	uid: string;
	name: string;
}

export const User = () => {
	const [user, setUser] = useState<IUser>();

	const login = () => {
		setUser({
			uid: "ABC123",
			name: "Moises Velasquez",
		});
	};

	return (
		<div className="mt-5">
			<h3>User:</h3>
			<button onClick={login} className="btn btn-outline-primary">
				User
			</button>
			{!user ? (
				<pre> User is not exits</pre>
			) : (
				<pre>{JSON.stringify(user)}</pre>
			)}
		</div>
	);
};
