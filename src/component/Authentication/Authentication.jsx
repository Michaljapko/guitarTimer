import { createUserDocumentFromAuth, signInWithGooglePopup, getUserDataSkills } from '../../utils/firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, addUserAuth } from '../../features/user/usersSlice';
import { setSkillsData } from '../../features/skills/skillsSlice';
import { selectSkill } from '../../features/skills/skillsSlice';

const Authentication = () => {
	const dispatch = useDispatch();
	const skill = useSelector(selectSkill);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userAuth = await createUserDocumentFromAuth(user);
		dispatch(addUserAuth(userAuth));
		const data = await getUserDataSkills(userAuth);
		dispatch(setSkillsData(data));
		dispatch(logIn());
	};
	return (
		<div>
			<button
				onClick={async () => {
					logGoogleUser();
				}}
			>
				Sign In
			</button>
		</div>
	);
};

export default Authentication;
