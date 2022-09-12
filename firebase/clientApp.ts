import { initializeApp } from "firebase/app";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "../config/config";

const firebaseConfig = {
  // apiKey: apiKey,
  // authDomain: authDomain,
  // projectId: projectId,
  // storageBucket: storageBucket,
  // messagingSenderId: messagingSenderId,
  // appId: appId,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return firebaseApp;
};
