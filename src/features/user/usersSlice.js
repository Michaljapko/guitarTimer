import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogIn: false,
	userAuth: null,
	userName: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state) => {
			state.isLogIn = true;
		},

		logOut: (state) => {
			state.isLogIn = false;
			state.userAuth = null;
		},
		addUserAuth: (state, action) => {
			state.userAuth = action.payload;
		},
		addUserName: (state, action) => {
			state.userName = action.payload;
		},
	},
});

export const selectIsLogIn = (state) => state.user.isLogIn;
export const selectUserAuth = (state) => state.user.userAuth;
export const selectUserName = (state) => state.user.userName;
export const { logIn, logOut, addUserAuth, addUserName } = userSlice.actions;
export default userSlice.reducer;
