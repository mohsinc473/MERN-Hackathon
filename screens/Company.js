import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CompanyInfoCard from '../components/CompCard';
import {StyleSheet, View, StatusBar, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FirestoreCompanyData} from '../redux-config/funcs';
import {ScrollView} from 'react-native-gesture-handler';

const CompanyScreen = ({company, ...props}) => {
  useEffect(() => {
    props.FirestoreCompanyData();
  }, []);
  // console.log('props=>', props);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            {company ? (
              company.map((comp) => (
                <>
                  <CompanyInfoCard key={comp.id} company={comp} />
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
  company: state.firestoreCompData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      FirestoreCompanyData,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompanyScreen);
