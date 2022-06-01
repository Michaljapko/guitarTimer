import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	isPractice: false,
	skillArr: [
		{
			name: 'Improwizacja',
			hours: 2,
			takes: 3,
			longestTake: 2,
			lastTake: '20 dni temu',
		},
		{
			name: 'Prawa Ręka',
			hours: 0.5,
			takes: 0,
			longestTake: 2,
			lastTake: '20 dni temu',
		},
		{
			name: 'Lewa Ręka',
			hours: 1,
			takes: 3,
			longestTake: 2,
			lastTake: '20 dni temu',
		},
		{
			name: 'Komponowanie',
			hours: 0.3,
			takes: 4,
			longestTake: 2,
			lastTake: '20 dni temu',
		},
		{
			name: 'Słuch',
			hours: 0.1,
			takes: 1,
			longestTake: 2,
			lastTake: '20 dni temu',
		},
	],
};

export const skillsSlice = createSlice({
	name: 'skills',
	initialState: initialState,
	reducers: {
		updateTime: (state, action) => {
			state.skillArr[action.payload[0]].hours = action.payload[1];
		},

		setIsPractice: (state, action) => {
			state.isPractice = true;
			state.skillArr[action.payload].practiceNow = true;
			console.log(current(state));
		},
	},
});

export const { updateTime, setIsPractice } = skillsSlice.actions;

export const selectSkills = (state) => state.skills.skillArr;
export const selectIsPractice = (state) => state.skills.isPractice;
export const selectAllHours = (state) =>
	state.skills.skillArr.reduce((pV, cV, e) => {
		return pV + cV.hours;
	}, 0);
export const selectAllTakes = (state) =>
	state.skills.skillArr.reduce((pV, cV, e) => {
		return pV + cV.takes;
	}, 0);

export const selectPercent = (index) => (getState) => {
	const state = getState;
	return (state.skills.skillArr[index].hours / selectAllHours(state)) * 100;
};

export default skillsSlice.reducer;
