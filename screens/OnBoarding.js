import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => {
  return (
    <Pressable style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16}}>Done</Text>
    </Pressable>
  );
};

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fefefe',
          image: (
            <Image
              style={styles.Images}
              source={require('../Images/onboard-1.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#f49217',
          image: (
            <Image
              style={styles.Images}
              source={require('../Images/onboard-2.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#7ac2ae',
          image: (
            <Image
              style={styles.Images}
              source={require('../Images/onboard-3.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  Images: {
    resizeMode: 'center',
    borderRadius: 50,
  },
});

export default OnBoardingScreen;
