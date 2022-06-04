import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { initialState } from '../../features/skills/skillsSlice';

const firebaseConfig = {
	apiKey: 'AIzaSyCR8ejcsCfG_FIn881MwS81uuCuzdydYWY',
	authDomain: 'guitar-exceries-app.firebaseapp.com',
	projectId: 'guitar-exceries-app',
	storageBucket: 'guitar-exceries-app.appspot.com',
	messagingSenderId: '442219397519',
	appId: '1:442219397519:web:b22a79fb797b7d23754bfa',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const auth = getAuth();

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		const skillsData = JSON.stringify(initialState);

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				skillsData,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return userAuth.uid;
};

export const getUserDataSkills = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth);
	const userSnapshot = await getDoc(userDocRef);

	return JSON.parse( userSnapshot.data().skillsData);
};

export const setUserDataSkills = async (userAuth, data) => {
	console.log(data);

	const userDocRef = doc(db, 'users', userAuth);
	const skillsData = JSON.stringify(data);

	await updateDoc(userDocRef, {
		skillsData,
	});
};
