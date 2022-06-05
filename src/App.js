import React from 'react';
import MainWrapper from './component/MainWrapper/MainWrapper';
import Authentication from './component/Authentication';
import GlobalWrapper from './component/GlobalWrapper';
import WelcomePage from './component/WelcomePage';
import HeadInfo from './component/HeadInfo';

import GlobalCss from './theme/global.css';
import theme from './theme/theme';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectIsLogIn } from './features/user/usersSlice';

function App() {
	const isLogIn = useSelector(selectIsLogIn);

	return (
		<ThemeProvider theme={theme}>
			<GlobalCss />
			<GlobalWrapper>
				{isLogIn && (
					<>
						<HeadInfo />
						<MainWrapper />
					</>
				)}
				{!isLogIn && (
					<>
						<WelcomePage />
						<Authentication />
					</>
				)}
			</GlobalWrapper>
		</ThemeProvider>
	);
}

export default App;
