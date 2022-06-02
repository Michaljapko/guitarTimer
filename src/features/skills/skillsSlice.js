import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	isPractice: false,
	practiceDate: '1.10.122',
	skillArr: [
		{
			name: 'Improwizacja',
			time: {
				hours: 2,
				minutes: 38,
			},
			takes: 3,
			longestTake: {
				hours: 2,
				minutes: 38,
			},
			lastTake: '20 dni temu',
		},
		{
			name: 'Prawa Ręka',
			time: {
				hours: 2,
				minutes: 38,
			},
			takes: 0,
			longestTake: {
				hours: 2,
				minutes: 38,
			},
			lastTake: '20 dni temu',
		},
		{
			name: 'Lewa Ręka',
			time: {
				hours: 2,
				minutes: 38,
			},
			takes: 3,
			longestTake: {
				hours: 2,
				minutes: 38,
			},
			lastTake: '20 dni temu',
		},
		{
			name: 'Komponowanie',
			time: {
				hours: 2,
				minutes: 40,
			},
			takes: 4,
			longestTake: {
				hours: 2,
				minutes: 38,
			},
			lastTake: '20 dni temu',
		},
		{
			name: 'Słuch',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 1,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
			lastTake: '20 dni temu',
		},
	],
};

export const skillsSlice = createSlice({
	name: 'skills',
	initialState: initialState,
	reducers: {
		exceriesDone: (state, action) => {
			const data = new Date();
			const skill = state.skillArr[action.payload.index];

			state.practiceDate = data.getDay() + '.' + data.getMonth() + '.' + data.getYear();

			if (skill.longestTake.hours === action.payload.time.hours && skill.longestTake.minutes < action.payload.time.minutes) {
				skill.longestTake.minutes = action.payload.time.minutes;
				skill.longestTake.hours = action.payload.time.hours;
			}
			if (skill.longestTake.hours < action.payload.time.hours) {
				skill.longestTake.minutes = action.payload.time.minutes;
				skill.longestTake.hours = action.payload.time.hours;
			}

			skill.time.hours = skill.time.hours + action.payload.time.hours;
			skill.time.minutes = skill.time.minutes + action.payload.time.minutes;

			skill.practiceNow = false;
			skill.takes++;
			state.isPractice = false;
		},

		setIsPractice: (state, action) => {
			state.isPractice = true;
			state.skillArr[action.payload].practiceNow = true;
		},
	},
});

export const { exceriesDone, setIsPractice } = skillsSlice.actions;

export const selectSkills = (state) => state.skills.skillArr;
export const selectIsPractice = (state) => state.skills.isPractice;

export const selectAllTime = (state) => {
	let minutes = state.skills.skillArr.reduce((pV, cV) => {
		return pV + cV.time.minutes;
	}, 0);
	let hours = state.skills.skillArr.reduce((pV, cV) => {
		return pV + cV.time.hours;
	}, 0);

	const totalH = hours + Math.floor(minutes / 60);
	const totalM = minutes % 60;
	const finalM = totalM < 10 ? '0' + totalM : totalM;
	return { horus: totalH, minutes: finalM };
};

export const selectAllTakes = (state) =>
	state.skills.skillArr.reduce((pV, cV) => {
		return pV + cV.takes;
	}, 0);

export const selectPercent = (index) => (getState) => {
	const state = getState;
	const allTime = selectAllTime(state);
	return (
		(Number(state.skills.skillArr[index].time.hours + '.' + state.skills.skillArr[index].time.minutes) /
			Number(allTime.horus + '.' + allTime.minutes)) *
		100
	);
};
export const selectIsPracticeToday = (state) => {
	const data = new Date();
	return state.skills.practiceDate === data.getDay() + '.' + data.getMonth() + '.' + data.getYear();
};

export default skillsSlice.reducer;
