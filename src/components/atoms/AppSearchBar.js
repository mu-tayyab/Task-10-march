import React, {useRef} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

//UI Components
import AppIcon from './AppIcon';

// CONSTANTS
import colors from '../../theme/color';
import {hp, wp} from '../../theme/responsiveness';
import {LayoutSizes, Spacing} from '../../theme/standardSizes';
import {gotham} from '../../utils/fonts';

const AppSearchBar = ({onChangeText, textInputRef, value, style, ...props}) => {
  return (
    <View style={[styles.searchSection, style]}>
      <AppIcon source={require('../../assets/icons/search.png')} />

      <TextInput
        ref={textInputRef ? textInputRef : null}
        {...props}
        editable={props.editable}
        style={[styles.Input]}
        placeholderTextColor={colors.grey1}
        onChangeText={
          onChangeText
            ? txt => {
                onChangeText(txt);
              }
            : null
        }
      />
    </View>
  );
};

export default React.memo(AppSearchBar);

const styles = StyleSheet.create({
  Input: {
    flex: 1,
    paddingRight: 15,
    fontFamily: gotham.Book,
    fontSize: LayoutSizes.TextInputFontSize,
    color: colors.black,
    marginLeft: 10,
    backgroundColor: colors.secondary,
  },
  searchSection: {
    height: hp(8),
    backgroundColor: colors.secondary,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: LayoutSizes.DefaultTextInputHeight,
    paddingHorizontal: Spacing.textInputHorizontalPadding,

    borderRadius: wp(20),
    borderWidth: 0.5,
    borderColor: colors.grey5,
  },
});
