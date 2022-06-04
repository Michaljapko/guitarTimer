import { configureStore } from '@reduxjs/toolkit';
import skillsSlice from '../features/skills/skillsSlice';
import usersSlice from '../features/user/usersSlice';

export const store = configureStore({
	reducer: {
		skills: skillsSlice,
		user: usersSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});
