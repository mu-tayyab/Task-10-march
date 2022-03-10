import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../atoms/AppText';

const AppHorizontalHeadings = ({left, right}) => {
  return (
    <View style={styles.section}>
      <AppText>{left}</AppText>
      <AppText>{right}</AppText>
    </View>
  );
};

export default AppHorizontalHeadings;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
  },
});
