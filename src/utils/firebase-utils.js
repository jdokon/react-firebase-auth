import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDFD8o4km_VVMvesbAlNPzj3e8wXk8Ji9k",
  authDomain: "nights-of-halloween.firebaseapp.com",
  projectId: "nights-of-halloween",
  storageBucket: "nights-of-halloween.appspot.com",
  messagingSenderId: "229750966956",
  appId: "1:229750966956:web:3fe77a16dff3e96efb2d09",
  measurementId: "G-C15E232HH7",
}

const firebaseapp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseapp)
export const db = getFirestore(firebaseapp)
export const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log("error creating the user", error.message)
    }

    return userDocRef
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
