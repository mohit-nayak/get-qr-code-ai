import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAvdJAiV33rnFktIPJF9Sigw-YJ43J9CFM",
  authDomain: "projectk-4298f.firebaseapp.com",
  projectId: "projectk-4298f",
  storageBucket: "projectk-4298f.appspot.com",
  messagingSenderId: "471801956081",
  appId: "1:471801956081:web:de87096d30c10244a6cb50",
  measurementId: "G-802FS5DQV0",
}

export const app =
  getApps()?.length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
