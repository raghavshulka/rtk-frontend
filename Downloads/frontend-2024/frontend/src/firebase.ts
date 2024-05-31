import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDGBRWYIqmj6Zas5tbUKB5efAeLMdOq0o",
  authDomain: "ecmr-34862.firebaseapp.com",
  projectId: "ecmr-34862",
  storageBucket: "ecmr-34862.appspot.com",
  messagingSenderId: "361200779415",
  appId: "1:361200779415:web:9fbc14d2bd577cea6169d2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
