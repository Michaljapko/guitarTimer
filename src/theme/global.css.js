import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
}
body {
	font-family: 'Roboto', sans-serif;
	font-weight: 100;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: rgb(34, 36, 63);
	background: linear-gradient(315deg, rgba(34, 36, 63, 1) 0%, rgba(49, 52, 99, 1) 100%);
	min-height: 100vh;
    
    min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 0.8rem;
color: hsl(0, 0%, 97%);
}

`;
