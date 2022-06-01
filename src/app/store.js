import { configureStore } from '@reduxjs/toolkit';
import skillsSlice from '../features/skills/skillsSlice';

export const store = configureStore({
	reducer: {
		skills: skillsSlice,
	},
});
