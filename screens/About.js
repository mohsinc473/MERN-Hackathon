import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
} from 'react-native';
const AboutScreen = ({navigation}) => {
  //   console.log('Navi=>', navigation);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Pressable
            style={styles.HamBurger}
            onPress={() => navigation.openDrawer()}>
            <Icon name="text" size={24} color="black" />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HamBurger: {
    marginLeft: 10,
    marginTop: 5,
  },
});

export default AboutScreen;
