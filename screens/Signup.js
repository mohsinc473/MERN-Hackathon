// import React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,
//   Platform,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

// const SignUpScreen = ({navigation}) => {
//   const [data, setData] = React.useState({
//     username: '',
//     password: '',
//     confirm_password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//     confirm_secureTextEntry: true,
//   });

//   const textInputChange = (val) => {
//     if (val.length !== 0) {
//       setData({
//         ...data,
//         username: val,
//         check_textInputChange: true,
//       });
//     } else {
//       setData({
//         ...data,
//         username: val,
//         check_textInputChange: false,
//       });
//     }
//   };

//   const handlePasswordChange = (val) => {
//     setData({
//       ...data,
//       password: val,
//     });
//   };

//   const handleConfirmPasswordChange = (val) => {
//     setData({
//       ...data,
//       confirm_password: val,
//     });
//   };

//   const updateSecureTextEntry = () => {
//     setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry,
//     });
//   };

//   const updateConfirmSecureTextEntry = () => {
//     setData({
//       ...data,
//       confirm_secureTextEntry: !data.confirm_secureTextEntry,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#e93347" barStyle="light-content" />
//       <View style={styles.header}>
//         <Animatable.Text
//           animation="slideInLeft"
//           duration={1800}
//           style={styles.text_header}>
//           Register Now!
//         </Animatable.Text>
//       </View>
//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <ScrollView>
//           <Text style={styles.text_footer}>Email</Text>
//           <View style={styles.action}>
//             <FontAwesome name="user-o" color="#05375a" size={20} />
//             <TextInput
//               placeholder="Your email"
//               style={styles.textInput}
//               autoCapitalize="none"
//               onChangeText={(val) => textInputChange(val)}
//             />
//             {data.check_textInputChange ? (
//               <Animatable.View animation="bounceIn">
//                 <Feather name="check-circle" color="green" size={20} />
//               </Animatable.View>
//             ) : null}
//           </View>

//           <Text
//             style={[
//               styles.text_footer,
//               {
//                 marginTop: 35,
//               },
//             ]}>
//             Password
//           </Text>
//           <View style={styles.action}>
//             <Feather name="lock" color="#05375a" size={20} />
//             <TextInput
//               placeholder="Your Password"
//               secureTextEntry={data.secureTextEntry ? true : false}
//               style={styles.textInput}
//               autoCapitalize="none"
//               onChangeText={(val) => handlePasswordChange(val)}
//             />
//             <TouchableOpacity onPress={updateSecureTextEntry}>
//               {data.secureTextEntry ? (
//                 <Feather name="eye-off" color="grey" size={20} />
//               ) : (
//                 <Feather name="eye" color="grey" size={20} />
//               )}
//             </TouchableOpacity>
//           </View>

//           <Text
//             style={[
//               styles.text_footer,
//               {
//                 marginTop: 35,
//               },
//             ]}>
//             Confirm Password
//           </Text>
//           <View style={styles.action}>
//             <Feather name="lock" color="#05375a" size={20} />
//             <TextInput
//               placeholder="Confirm Your Password"
//               secureTextEntry={data.confirm_secureTextEntry ? true : false}
//               style={styles.textInput}
//               autoCapitalize="none"
//               onChangeText={(val) => handleConfirmPasswordChange(val)}
//             />
//             <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
//               {data.secureTextEntry ? (
//                 <Feather name="eye-off" color="grey" size={20} />
//               ) : (
//                 <Feather name="eye" color="grey" size={20} />
//               )}
//             </TouchableOpacity>
//           </View>
//           <View style={styles.textPrivate}>
//             <Text style={styles.color_textPrivate}>
//               By signing up you agree to our
//             </Text>
//             <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
//               {' '}
//               Terms of service
//             </Text>
//             <Text style={styles.color_textPrivate}> and</Text>
//             <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
//               {' '}
//               Privacy policy
//             </Text>
//           </View>
//           <View style={styles.button}>
//             <TouchableOpacity
//               onPress={() => {}}
//               style={[
//                 styles.signIn,
//                 {
//                   borderColor: '#009387',
//                   borderWidth: 1,
//                 },
//               ]}>
//               <Text
//                 style={[
//                   styles.textSign,
//                   {
//                     color: '#009387',
//                   },
//                 ]}>
//                 Sign Up
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={[
//                 styles.signIn,
//                 {
//                   borderColor: '#009387',
//                   borderWidth: 1,
//                   marginTop: 15,
//                 },
//               ]}>
//               <Text
//                 style={[
//                   styles.textSign,
//                   {
//                     color: '#009387',
//                   },
//                 ]}>
//                 Sign In
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </Animatable.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e93347',
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingBottom: 50,
//   },
//   footer: {
//     flex: Platform.OS === 'ios' ? 3 : 5,
//     backgroundColor: '#ced4da',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   text_header: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   text_footer: {
//     color: '#05375a',
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   signIn: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textPrivate: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 20,
//   },
//   color_textPrivate: {
//     color: 'grey',
//   },
// });

import React from 'react';
import {View, Text, Platform, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={styles.body}>
            <Text>Login and Authorization</Text>
            <Text>
              In this application there are three kind of users Admin, Company
              and Student and their authentication section are given below.
            </Text>

            <Text>Admin</Text>
            <Text>
              To login as admin just sign in with the given credentials
            </Text>
            <Text>E-mail: adminauth2020@gmail.com </Text>
            <Text>Password: admin2020 </Text>

            <Text>Company</Text>
            <Text>
              To login as company just sign in with the given credentials
            </Text>
            <Text>E-mail: companyauth2020@gmail.com </Text>
            <Text>Password: company2020 </Text>

            <Text>Student</Text>
            <Text>To login as Student you have to signIn with google</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
});

export default SignUpScreen;
