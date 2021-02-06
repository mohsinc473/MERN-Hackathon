import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import AboutScreen from './About';
import HomeScreen from './Home';

const DummyScreen = () => {
  //   console.log('Navi=>', navigation);
  return (
    <>
      <Drawer.Navigator drawerType={'front'}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default DummyScreen;
