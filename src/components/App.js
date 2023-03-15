import React, { createContext, useState } from 'react';
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = createContext();

const App = () => {
	const [user, setUser] = useState({
		name: 'Newton',
		age: 3,
	});
	return (
		<UserContext.Provider value={user}>
			<div id="main">
				<UserProfile />
			</div>
		</UserContext.Provider>
	);
};

export default App;
export { UserContext };
