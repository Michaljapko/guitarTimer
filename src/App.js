import React from 'react';
import Wrapper from './component/Wrapper';
import './App.css';
import HeadInfo from './component/HeadInfo';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<HeadInfo />
				<Wrapper />
			</header>
		</div>
	);
}

export default App;
