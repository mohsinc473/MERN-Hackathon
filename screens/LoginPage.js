import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginWithEmail, signupWithEmail} from '../redux-config/funcs';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

const SignInScreen = (props) => {
  // console.log('LoginProp', props);
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    // signIn(foundUser);
  };

  const LoginEmail = async (email, password) => {
    let UserNode;
    let err;
    if (!email.trim() && !password.trim()) {
      alert("Inputs Fields Can't Be Empty");
    } else {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          UserNode = user;
          console.log('signed in!', user);
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            err = 'That email address is invalid!';
            // ErrorAlert(err);
            console.log(err);
          }
          err = error;
          // ErrorAlert(error);
          console.error(error);
        });

      UserNode ? props.navigation.navigate('Dummy') : ErrorAlert(err);
    }
  };

  const GoogleLogin = async () => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const UserData = await auth().signInWithCredential(googleCredential);
    console.log('Data->', UserData);
    if (UserData) {
      props.navigation.navigate('Dummy');
    }
  };

  const ErrorAlert = (err) => {
    Alert.alert(
      'Error',
      `${err}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e93347" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Text
          animation="slideInLeft"
          duration={1800}
          style={styles.text_header}>
          Welcome!
        </Animatable.Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text
          style={[
            styles.text_footer,
            {
              color: 'black',
            },
          ]}>
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'black'} size={20} />
          <TextInput
            placeholder="Your email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: 'black',
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={'black'} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
              },
            ]}
            // onPress={() => LoginEmail(data.username, data.password)}
            onPress={() => props.navigation.navigate('Form')}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>
              Click here to read about authorization
            </Text>
          </TouchableOpacity>
        </View>
        <Pressable
          activeOpacity={0.8}
          style={styles.googleBtn}
          onPress={GoogleLogin}>
          <Image
            style={styles.googleImg}
            source={require('../Images/icon-google.png')}
          />
          <Text style={styles.googleBtnText}>Sign in with Google</Text>
        </Pressable>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e93347',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 6,
    backgroundColor: '#ced4da',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#283618',
    fontFamily: 'Lato-Regular',
  },
  googleBtn: {
    // backgroundColor: '#f3ffb6',
    backgroundColor: '#e8ff7f',
    borderColor: '#009387',
    width: '100%',
    height: 50,
    borderWidth: 1,
    marginBottom: 100,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  googleImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  googleBtnText: {
    color: '#4867aa',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});

// const mapDispatchToProps = (dispatch) => ({
//   signupEmail: () => dispatch(signupWithEmail()),
//   loginEmail: () => dispatch(loginWithEmail()),
// });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginWithEmail,
      signupWithEmail,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SignInScreen);
