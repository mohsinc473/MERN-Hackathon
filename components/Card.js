import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const CardShowcase = (props) => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  //   console.log('Navi=>', navigation);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={styles.cardHeader}>
            <Image
              style={styles.UserImg}
              source={require('../Images/avatar.jpg')}
            />
            <Text style={styles.userName}>Mohsin</Text>
          </View>
          <Pressable onPress={() => logout} style={{padding: 20}}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  userName: {
    marginLeft: 20,
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
});

export default CardShowcase;
