import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain:  process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:  process.env.REACT_APP_DATABASEURL,
    projectId:  process.env.REACT_APP_PROJECTID,
    storageBucket:  process.env.REACT_APP_STOREGEBUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGINGSENDERID,
    appId:  process.env.REACT_APP_APPID
}
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app);