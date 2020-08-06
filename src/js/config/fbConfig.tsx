import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAPlR10BTdPAA3qrgf4BnbTEAUKsAOANBA',
  authDomain: 'project-mangement-tool-ba94c.firebaseapp.com',
  databaseURL: 'https://project-mangement-tool-ba94c.firebaseio.com',
  projectId: 'project-mangement-tool-ba94c',
  storageBucket: 'project-mangement-tool-ba94c.appspot.com',
  messagingSenderId: '994840881165',
  appId: '1:994840881165:web:172de820f28c7b7a250d44',
  measurementId: 'G-34M7NN17JL',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
