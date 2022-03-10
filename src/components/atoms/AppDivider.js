import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hp} from '../../theme/responsiveness';

const AppDivider = ({style}) => {
  return <View style={[styles.divider, style]}></View>;
};

export default React.memo(AppDivider);

const styles = StyleSheet.create({
  divider: {
    height: hp(0.2),
    marginVertical: 10,
    backgroundColor: 'rgba(231, 231, 231, 0.99)',
    width: '100%',
  },
});
