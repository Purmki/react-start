import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8vXUV10ivrEjKQ-jWe6VQwvgnZiWJ1ds",
  authDomain: "resume-project-1b93e.firebaseapp.com",
  projectId: "resume-project-1b93e",
  storageBucket: "resume-project-1b93e.appspot.com",
  messagingSenderId: "1033382347547",
  appId: "1:1033382347547:web:2ad18ac1e53cc3419609be",
  measurementId: "G-5QM7C5F0M2",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };