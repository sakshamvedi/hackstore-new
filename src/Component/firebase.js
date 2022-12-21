// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth , GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5srNKiPq9uHHBEeOhaCUUyuEUGK6iyxU",
  authDomain: "hack-store-01.firebaseapp.com",
  projectId: "hack-store-01",
  storageBucket: "hack-store-01.appspot.com",
  messagingSenderId: "90147495814",
  appId: "1:90147495814:web:a7f6ee8639373a4c839607",
  measurementId: "G-B5EMCXJYNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider  = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export const googlein = () =>{
 signInWithPopup(auth  ,provider).then((result)=>{
    const name = result.user.displayName;
    const email = result.user.email;
    const picurl = result.user.photoURL;
    localStorage.setItem("username" , name.substring(0,7));
    localStorage.setItem("useremail" , email);
    localStorage.setItem("userpic",picurl);
    localStorage.setItem("auth" , true);
    window.location.reload();
 }).catch((error)=>{
    console.log(error);
 })
}