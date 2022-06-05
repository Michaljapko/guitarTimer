import { createUserDocumentFromAuth, signInWithGooglePopup, getUserDataSkills } from '../../utils/firebase/firebase.utils';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, addUserAuth, addUserName, selectIsLogIn } from '../../features/user/usersSlice';
import { setSkillsData } from '../../features/skills/skillsSlice';

const Authentication = () => {
	const dispatch = useDispatch();
	const isLogIn = useSelector(selectIsLogIn);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		dispatch(addUserName(user.displayName));
		const userAuth = await createUserDocumentFromAuth(user);
		dispatch(addUserAuth(userAuth));
		const data = await getUserDataSkills(userAuth);
		dispatch(setSkillsData(data));
		dispatch(logIn());
	};
	return (
		<div>
			{!isLogIn ? (
				<Button
					action={() => {
						logGoogleUser();
					}}
				>
					Sign In
				</Button>
			) : (
				<Button
					action={() => {
						dispatch(logOut());
					}}
				>
					Log Out
				</Button>
			)}
		</div>
	);
};

export default Authentication;
