import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCMQVYKD_JNNxflSUfc-bBvM9DpYu1o914",
    authDomain: "saferecovery-789f8.firebaseapp.com",
    projectId: "saferecovery-789f8",
    storageBucket: "saferecovery-789f8.appspot.com",
    messagingSenderId: "211402696177",
    appId: "1:211402696177:web:aee567d828e9fb233a9050"
})

const db = firebase.firestore()

export default db