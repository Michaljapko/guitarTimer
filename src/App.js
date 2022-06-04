import React from 'react';
import Wrapper from './component/Wrapper';
import Authentication from './component/Authentication';
import { selectIsLogIn } from './features/user/usersSlice';
import { useSelector } from 'react-redux';
import './App.css';

import HeadInfo from './component/HeadInfo';

function App() {
	const isLogIn = useSelector(selectIsLogIn);

	return (
		<div className='App'>
			<header className='App-header'>
				{isLogIn && (
					<>
						<HeadInfo />
						<Wrapper />
					</>
				)}
				<Authentication />
			</header>
		</div>
	);
}

export default App;
