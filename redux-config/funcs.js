import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const loginWithEmail = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('signed in!', user);
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const signupWithEmail = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const logout = () => {
  try {
    auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const FirestoreStudentData = () => {
  return (dispatch) => {
    firestore()
      .collection('students')
      .get()
      .then((querySnapshot) => {
        // console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          dispatch({type: 'getFirestoreData', data: documentSnapshot});
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });
  };
};

export const FirestoreCompanyData = () => {
  return (dispatch) => {
    firestore()
      .collection('company')
      .get()
      .then((querySnapshot) => {
        // console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          dispatch({type: 'getFirestoreCompData', data: documentSnapshot});
          // console.log(
          //   'User ID: ',
          //   documentSnapshot.id,
          //   documentSnapshot.data(),
          // );
        });
      });
  };
};

// const facebookLogin = () => {
//   return (dispatch) => {
//     var provider = new firebase.auth.FacebookAuthProvider();

//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(function (result) {
//         var token = result.credential.accessToken;
//         var user = result.user;
//         let userNode = {
//             name : user.displayName,
//             email : user.email,
//             avatar : user.photoURL,
//             uid : user.uid,
//         }
//         firebase.database().ref('/').child(`users/${user.uid}`).set(userNode)
//         .then(() => {
//             // alert("Login Succesful");
//             dispatch({type:"Auth",data:userNode})
//         })

//       })
//       .catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//       });
//   };
// };

// export {loginWithEmail, signupWithEmail, logout};
