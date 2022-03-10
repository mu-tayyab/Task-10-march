import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppIcon from '../atoms/AppIcon';
import {wp} from '../../theme/responsiveness';
import colors from '../../theme/color';

const AppIconWithCustomBg = ({bgColor, iconColor, source, iconSize}) => {
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: bgColor ? bgColor : colors.secondary,
        },
      ]}>
      <AppIcon
        size={iconSize}
        tintColor={iconColor}
        source={source}
        iconSize={wp(5)}
      />
    </View>
  );
};

export default AppIconWithCustomBg;

const styles = StyleSheet.create({
  section: {
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
