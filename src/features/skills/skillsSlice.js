import { createSlice } from '@reduxjs/toolkit';
import { setUserDataSkills } from '../../utils/firebase/firebase.utils';

export const initialState = {
	isPractice: false,
	practiceDate: '1.10.122',
	skillArr: [
		{
			name: 'Improwizacja',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 0,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
		},
		{
			name: 'Prawa Ręka',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 0,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
		},
		{
			name: 'Lewa Ręka',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 0,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
		},
		{
			name: 'Timing',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 0,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
		},
		{
			name: 'Teoria',
			time: {
				hours: 0,
				minutes: 0,
			},
			takes: 0,
			longestTake: {
				hours: 0,
				minutes: 0,
			},
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

			if (skill.time.minutes + action.payload.time.minutes > 59) {
				skill.time.minutes = (skill.time.minutes + action.payload.time.minutes) % 60;
				skill.time.hours++;
			} else {
				skill.time.minutes = skill.time.minutes + action.payload.time.minutes;
			}

			skill.time.hours = skill.time.hours + action.payload.time.hours;

			skill.practiceNow = false;
			state.isPractice = false;
			skill.takes++;

			setUserDataSkills(action.payload.userAuth, state);
		},
		setSkillsData: (state, { payload }) => {
			state.isPractice = payload.isPractice;
			state.practiceDate = payload.practiceDate;
			state.skillArr = payload.skillArr;
		},
		setIsPractice: (state, action) => {
			state.isPractice = true;
			state.skillArr[action.payload].practiceNow = true;
		},
	},
});

export const selectSkills = (state) => state.skills.skillArr;
export const selectSkill = (state) => state.skills;
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
	let minute = state.skills.skillArr[index].time.minutes;
	if (minute < 10) {
		minute = 10;
	}
	return (Number(state.skills.skillArr[index].time.hours + '.' + minute) / Number(allTime.horus + '.' + allTime.minutes)) * 100;
};
export const selectIsPracticeToday = (state) => {
	const data = new Date();
	return state.skills.practiceDate === data.getDay() + '.' + data.getMonth() + '.' + data.getYear();
};

export const { exceriesDone, setIsPractice, setSkillsData } = skillsSlice.actions;
export default skillsSlice.reducer;
