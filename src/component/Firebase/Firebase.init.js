import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";





const initializeFirebase = () => {
    initializeApp(FirebaseConfig);
}

export default initializeFirebase;