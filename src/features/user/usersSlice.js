import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	isLogIn: false,
	userAuth: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state) => {
			state.isLogIn = true;
		},

		logOut: (state) => {
			state.user.isLogIn = false;
		},
		addUserAuth: (state, action) => {
			state.userAuth = action.payload;
		},
	},
});

export const selectIsLogIn = (state) => state.user.isLogIn;
export const selectUserAuth = (state) => state.user.userAuth;
export const { logIn, logOut, addUserAuth } = userSlice.actions;
export default userSlice.reducer;
