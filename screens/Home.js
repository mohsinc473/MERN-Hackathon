import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardShowcase from '../components/card';
import {StyleSheet, View, Text, StatusBar, Pressable} from 'react-native';
import {connect} from 'react-redux';
const HomeScreen = (props) => {
  //   console.log('Navi=>', navigation);
  // console.log('props=>', props);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Pressable
            style={styles.HamBurger}
            onPress={() => props.navigation.openDrawer()}>
            <Icon name="text" size={24} color="black" />
          </Pressable>

          {/* <CardShowcase></CardShowcase> */}
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

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(HomeScreen);

// export default HomeScreen;
