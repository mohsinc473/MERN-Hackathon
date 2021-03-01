import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={styles.body}>
            <Text style={styles.headings}>Login and Authorization</Text>
            <Text style={styles.para}>
              In this application there are three kind of users Admin, Company
              and Student and their authentication section are given below.
            </Text>

            <Text style={styles.headings}>Admin</Text>
            <Text style={styles.para}>
              To login as admin just sign in with the given credentials
            </Text>
            <Text style={styles.para}>E-mail: adminauth2020@gmail.com </Text>
            <Text style={styles.para}>Password: admin2020 </Text>

            <Text style={styles.headings}>Company</Text>
            <Text style={styles.para}>
              To login as company just sign in with the given credentials
            </Text>
            <Text style={styles.para}>E-mail: companyauth2020@gmail.com </Text>
            <Text style={styles.para}>Password: company2020 </Text>

            <Text style={styles.headings}>Student</Text>
            <Text style={styles.para}>
              To login as Student you have to signIn with Google
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 15,
    marginLeft: 10,
  },
  headings: {
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  para: {
    marginHorizontal: 5,
    marginVertical: 3,
    fontSize: 15,
    fontFamily: 'serif',
  },
});

export default SignUpScreen;
