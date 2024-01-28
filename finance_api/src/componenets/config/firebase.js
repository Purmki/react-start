import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3E36fImK32ZK5GnrMkRCO34YSydE5PF8",
  authDomain: "react-finance-f5d1e.firebaseapp.com",
  projectId: "react-finance-f5d1e",
  storageBucket: "react-finance-f5d1e.appspot.com",
  messagingSenderId: "968761988556",
  appId: "1:968761988556:web:8caa106dedc257ef33f969",
  measurementId: "G-C21LYXLPG6",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
