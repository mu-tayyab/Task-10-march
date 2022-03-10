import React from 'react';
import {StyleSheet, View} from 'react-native';
//UI Components

import AppIcon from './AppIcon';
import AppText from './AppText';

// CONSTANTS
import colors from '../../theme/color';
import {wp} from '../../theme/responsiveness';
import {verdana} from '../../utils/fonts';

const AppChips = ({color, fontSize, title, style, textStyle, type, dot}) => {
  return (
    <View
      style={[
        styles.chips,
        {
          backgroundColor: styles.type[`${type}_bg`],
        },
        style,
      ]}>
      {type == 'selected' && (
        <AppIcon
          tintColor={colors.secondary}
          style={{marginRight: 3}}
          source={require('../../assets/icons/dot.png')}
          size={wp(2.5)}
        />
      )}

      <AppText
        fontFamily={verdana.Regular}
        style={([{marginLeft: 5}], textStyle)}
        color={styles.type[`${type}_txt`]}
        fontSize={fontSize ? fontSize : wp(3.5)}>
        {title}
      </AppText>
    </View>
  );
};

export default React.memo(AppChips);

const styles = StyleSheet.create({
  chips: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(50),
    marginHorizontal: 5,
    padding: 4,
  },
  type: {
    selected_bg: colors.light_orange,
    selected_txt: colors.black,
    unSelected_bg: colors.secondary,
    unSelected_txt: colors.black,
  },
});
