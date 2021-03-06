import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StudentInfoCard from '../components/card';
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FirestoreStudentData} from '../redux-config/funcs';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = ({students, ...props}) => {
  useEffect(() => {
    props.FirestoreStudentData();
  }, []);

  console.log('Stds=>', props);
  // console.log('props=>', props);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Pressable
              style={styles.HamBurger}
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="text" size={24} color="black" />
            </Pressable>

            {students ? (
              students.map((stud) => (
                <>
                  <StudentInfoCard key={stud.id} students={stud} />
                </>
              ))
            ) : (
              <ActivityIndicator size="large" />
            )}
          </View>
        </ScrollView>
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
  students: state.firestoreStdData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      FirestoreStudentData,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
