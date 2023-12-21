// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXzYTYrdbU6x5HTCK6KkQAmAKxOH8xWmY",
  authDomain: "streamgpt-85b87.firebaseapp.com",
  projectId: "streamgpt-85b87",
  storageBucket: "streamgpt-85b87.appspot.com",
  messagingSenderId: "584775493616",
  appId: "1:584775493616:web:4bc707c18291055c405f35",
  measurementId: "G-TLGLEBL2JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();