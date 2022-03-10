import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//UI Components
import AppIcon from './AppIcon';
import AppText from './AppText';

// CONSTANTS
import colors from '../../theme/color';
import {wp} from '../../theme/responsiveness';
import {LayoutSizes, Spacing} from '../../theme/standardSizes';
import {verdana} from '../../utils/fonts';

const AppHeader = ({
  navigation,
  divider,
  color,
  title,
  rightIcon,
  rightText,
  hideBackBtn,
  onBackButton,
  onRightItemPress,
}) => {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: color ? color : 'white',
        },
        divider ? styles.divider : null,
      ]}>
      {hideBackBtn ? (
        <AppText></AppText>
      ) : (
        <TouchableOpacity
          onPress={onBackButton ? onBackButton : () => navigation.goBack()}>
          <AppIcon
            tintColor={colors.grey}
            size={LayoutSizes.headerIconSize}
            source={require('../../assets/icons/header-back.png')}
          />
        </TouchableOpacity>
      )}

      <AppText
        numberOfLines={1}
        fontFamily={verdana.Regular}
        style={{maxWidth: wp(50)}}>
        {title}
      </AppText>
      <TouchableOpacity onPress={onRightItemPress ? onRightItemPress : null}>
        {rightText && (
          <AppText
            numberOfLines={1}
            color={colors.grey1}
            fontFamily={verdana.Regular}
            style={{maxWidth: wp(40)}}>
            {rightText}
          </AppText>
        )}
        {rightIcon && (
          <AppIcon size={LayoutSizes.headerIconSize} source={rightIcon} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AppHeader);

const styles = StyleSheet.create({
  header: {
    height: LayoutSizes.DefaultHeaderHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.headerHorizontalPadding,
    backgroundColor: colors.white,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(231, 231, 231, 0.99)',
  },
});
