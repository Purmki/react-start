
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCg86TXTJm6a4ZfJPVbm8kkfNvSin2edYY",
    authDomain: "react-start-db779.firebaseapp.com",
    projectId: "react-start-db779",
    storageBucket: "react-start-db779.appspot.com",
    messagingSenderId: "997250198197",
    appId: "1:997250198197:web:19c88ae3546bdabae0acfc",
    measurementId: "G-14LTVVSBNP"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 const db = getFirestore(app);
 const auth = getAuth(app)
 
 export { db };
 export { auth };
// export default firebaseConfig;
