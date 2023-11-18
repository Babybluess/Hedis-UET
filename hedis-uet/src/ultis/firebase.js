// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
// import { initializeApp } from 'firebase/app'
// import { Alert } from 'react-native'
// import { myApp } from '../../firebase-config'

// // const firebaseApp = initializeApp({
// //     apiKey: "AIzaSyCZXeMJ9tawQbCz03aJwsd94jDqa3Uyysw",
// //     authDomain: "hedis-uet.firebaseapp.com",
// //     projectId: "hedis-uet",
// //   })

//   const auth = getAuth(myApp)

// export const handleCreateAccount = (navigation, email, password) => {
//     createUserWithEmailAndPassword(auth, email, password).
//     then ((userCredential) => {
//       console.log('Account created!')
//       const user = userCredential.user
//       console.log(user)
//       navigation.navigate('Log In')
//     })
//     .catch(error => {
//       console.log(error)
//       Alert.alert(error.message)
//     })
//   }

// export const handleSignIn = (navigation, email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log('signed in!')
//       const user = userCredential.user
//       console.log(user)
//       navigation.navigate('Home')
//     })
//     .catch(error => {
//       console.log(error)
//       Alert.alert(error.message)
//     })
//   }
