import React from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';

//UI Components
import AppText from './AppText';

// CONSTANTS
import colors from '../../theme/color';
import {wp} from '../../theme/responsiveness';
import {verdana} from '../../utils/fonts';
import {LayoutSizes} from '../../theme/standardSizes';

const AppButton = ({
  title,
  btnStyle,
  iconStyle,
  color,
  loader,
  leftIcon,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.appBtn, btnStyle]} {...props}>
      <AppText
        numberOfLines={1}
        color={color ? color : colors.white}
        fontFamily={verdana.Regular}
        fontSize={wp(3.4)}
        style={{maxWidth: wp(60)}}>
        {title}
      </AppText>
      {loader === 'loading' && (
        <ActivityIndicator
          style={{marginLeft: 15}}
          size="small"
          color={colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);

const styles = StyleSheet.create({
  appBtn: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: colors.black,
    height: LayoutSizes.DefaultButtonHeight,
  },
});
