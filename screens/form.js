import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';

const FormikForm = ({route, navigation}) => {
  const {profile} = route.params;
  console.log('Form=>', route);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{alignItems: 'center', marginVertical: 15}}>
              <Text style={styles.Title}>Student Registration Form</Text>
            </View>
            <View>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phoneNumber: '',
                  address: '',
                  hsscDergree: '',
                  hsscMarks: '',
                  hsscTotalMarks: '',
                  bsDegree: '',
                  bsCgpa: '',
                  bsCompletionYear: '',
                }}
                onSubmit={(values, actions) => {
                  // console.log('Formik OBJ=>', values);
                  firestore()
                    .collection('students')
                    .add({
                      name: values.name,
                      email: values.email,
                      phoneNumber: values.phoneNumber,
                      address: values.address,
                      hsscDergree: values.hsscDergree,
                      hsscMarks: values.hsscMarks,
                      hsscTotalMarks: values.hsscTotalMarks,
                      bsDegree: values.bsDergree,
                      bsCgpa: values.bsCgpa,
                      bsCompletionYear: values.bsCompletionYear,
                      imageURL: profile,
                    })
                    .then(() => {
                      console.log('User added!');
                    });

                  actions.resetForm();
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <View>
                    <TextInput
                      style={styles.NameInput}
                      placeholder="Full Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    <TextInput
                      style={styles.NameInput}
                      placeholder="E-mail"
                      onChangeText={handleChange('email')}
                      value={values.email}
                      keyboardType={'email-address'}
                    />
                    <TextInput
                      style={styles.NameInput}
                      placeholder="Mobile Number"
                      onChangeText={handleChange('phoneNumber')}
                      value={values.phoneNumber}
                      keyboardType={'phone-pad'}
                    />
                    <TextInput
                      multiline={true}
                      style={styles.NameInput}
                      placeholder="Permanent Address"
                      onChangeText={handleChange('address')}
                      value={values.address}
                      keyboardType={'default'}
                    />

                    <Text style={styles.headin}>HSSC:</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 80}]}
                        placeholder="Degree"
                        onChangeText={handleChange('hsscDergree')}
                        value={values.hsscDergree}
                        keyboardType={'default'}
                      />
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 80}]}
                        placeholder="Marks"
                        onChangeText={handleChange('hsscMarks')}
                        value={values.hsscMarks}
                        keyboardType={'numeric'}
                      />
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 90}]}
                        placeholder="Total Marks"
                        onChangeText={handleChange('hsscTotalMarks')}
                        value={values.hsscTotalMarks}
                        keyboardType={'numeric'}
                      />
                    </View>

                    <Text style={styles.headin}>Bachelor's:</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 80}]}
                        placeholder="Degree"
                        onChangeText={handleChange('bsDegree')}
                        value={values.bsDegree}
                        keyboardType={'default'}
                      />
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 80}]}
                        placeholder="CGPA"
                        onChangeText={handleChange('bsCgpa')}
                        value={values.bsCgpa}
                        keyboardType={'numeric'}
                      />
                      <TextInput
                        multiline={true}
                        style={[styles.NameInput, {width: 90}]}
                        placeholder="Comp Year"
                        onChangeText={handleChange('bsCompletionYear')}
                        value={values.bsCompletionYear}
                        keyboardType={'numeric'}
                      />
                    </View>

                    <Pressable
                      style={{alignItems: 'center'}}
                      onPress={handleSubmit}>
                      <Text style={styles.submitBtn}>Submit</Text>
                    </Pressable>

                    <Text style={styles.OrBtn}>OR</Text>

                    <Pressable
                      style={{alignItems: 'center'}}
                      onPress={() => navigation.navigate('Students')}>
                      <Text style={styles.submitBtn}>Go To Home</Text>
                    </Pressable>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  NameInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  Title: {
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: '#1d3557',
  },
  headin: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: '#1d3557',
  },
  inputBox: {
    width: '90%',
    marginVertical: 5,
    borderRadius: 5,
  },
  submitBtn: {
    width: '90%',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 25,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    color: '#1d3557',
  },
  OrBtn: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 20,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    color: '#1d3557',
  },
});

export default FormikForm;
