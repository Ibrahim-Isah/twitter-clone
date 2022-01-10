import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCr2PS5DHwYhmWT1175rJeF1Rus_iX-0Ck',
	authDomain: 'twitter-clone-88735.firebaseapp.com',
	projectId: 'twitter-clone-88735',
	storageBucket: 'twitter-clone-88735.appspot.com',
	messagingSenderId: '597939715904',
	appId: '1:597939715904:web:345a8e0eebfbed2b3a04a5',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
