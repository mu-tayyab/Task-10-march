import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../atoms/AppText';

const NoDataFound = ({message}) => {
  return (
    <View style={styles.noDataFound}>
      <AppText>{message}</AppText>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  noDataFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
