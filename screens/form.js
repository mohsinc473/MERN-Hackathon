import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
const FormikForm = (props) => {
  //   console.log('Navi=>', navigation);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View>
            <Text>Student Registration Form</Text>
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
                bsDergree: '',
                bsCgpa: '',
              }}
              onSubmit={(values, actions) => {
                console.log(values);
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

                  <Text>HSSC:</Text>

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

                  <Text>Bachelor's:</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TextInput
                      multiline={true}
                      style={[styles.NameInput, {width: 80}]}
                      placeholder="Degree"
                      onChangeText={handleChange('bsDergree')}
                      value={values.bsDergree}
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
                      onChangeText={handleChange('bsTotalMarks')}
                      value={values.bsTotalMarks}
                      keyboardType={'numeric'}
                    />
                  </View>

                  <Pressable onPress={handleSubmit}>
                    <Text style={{padding: 5, marginLeft: 10, marginTop: 10}}>
                      Submit
                    </Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  NameInput: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 4,
    borderColor: 'black',
  },
});

export default FormikForm;
