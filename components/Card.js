import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, StatusBar, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const StudentInfoCard = ({students}) => {
  // console.log('Navi=>', students);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ecf0f1',
            alignItems: 'center',
          }}>
          <Animatable.View animation="fadeInUpBig" style={styles.cardArea}>
            <View style={styles.cardHeader}>
              <Image
                style={styles.UserImg}
                source={{uri: `${students.data().imageURL}`}}
              />
              <Text numberOfLines={1} style={styles.userName}>
                {students.data().name}
              </Text>
            </View>
            <Text style={styles.Stutext}>E-mail: {students.data().email}</Text>
            <Text style={styles.Stutext}>
              Contact No: {students.data().phoneNumber}
            </Text>
            <Text style={styles.Stutext}>
              Bachelor's Degree: {students.data().bsDegree}
            </Text>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cardArea: {
    marginTop: 15,
    marginBottom: 5,
    height: 'auto',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
    padding: 10,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  UserImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  userName: {
    width: '76%',
    marginLeft: 20,
    textAlignVertical: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  Stutext: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'serif',
  },
});

export default StudentInfoCard;
