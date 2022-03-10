import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import AppText from '../atoms/AppText';
import {hp, wp} from '../../theme/responsiveness';
import {gotham} from '../../utils/fonts';
import colors from '../../theme/color';
import screenRouteName from '../../constants/RouteName';
import AppIconWithCustomBg from '../molecules/AppIconWithCustomBg';
import {addQuantity, subtractQuantity} from '../../redux/actions/cartActions';
import {useDispatch} from 'react-redux';
const PLUS_ICON = require('../../assets/icons/plus-icon.png');
const MINUS_ICON = require('../../assets/icons/minus-icon.png');
const CartCard = ({item, onCardPress, navigation, ...props}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={
        onCardPress
          ? onCardPress
          : () => navigation.navigate(screenRouteName.ADD_TO_CART)
      }
      style={styles.card}>
      <Image
        resizeMode="cover"
        style={styles.cartImage}
        source={item.imageUrl}
      />
      <View style={styles.itemInfoSection}>
        <AppText fontSize={wp(4)} fontFamily={gotham.BoldItalic}>
          {item.name}
        </AppText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppText
            fontSize={wp(4)}
            color={colors.black}
            fontFamily={gotham.Medium}>
            {(item.price * item.quantity).toFixed(3)}
          </AppText>

          <AppText
            style={{marginLeft: 10}}
            fontSize={wp(3)}
            color={colors.black}
            fontFamily={gotham.LightItalic}>
            {item.currency}
          </AppText>
        </View>
        <AppText
          fontSize={wp(3.7)}
          color={colors.black}
          fontFamily={gotham.Bold}>
          x{item.quantity}
        </AppText>
      </View>

      <View style={styles.addRemoveButtonSection}>
        <TouchableOpacity onPress={() => dispatch(addQuantity(item))}>
          <AppIconWithCustomBg
            bgColor={colors.black}
            iconSize={wp(3.5)}
            iconColor={colors.white}
            source={PLUS_ICON}
          />
        </TouchableOpacity>
        <AppText
          style={{textAlign: 'center'}}
          fontSize={wp(3.7)}
          color={colors.black}
          fontFamily={gotham.Bold}>
          {item.quantity}
        </AppText>
        <TouchableOpacity onPress={() => dispatch(subtractQuantity(item))}>
          <AppIconWithCustomBg
            bgColor={colors.red}
            iconColor={colors.white}
            source={MINUS_ICON}
            iconSize={wp(3.5)}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(12),
    padding: 10,
    backgroundColor: '#F8F9FA',
    marginTop: wp(4),
    borderRadius: 15,
    overflow: 'hidden',
  },
  cartImage: {
    width: '20%',
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 15,
  },
  itemInfoSection: {
    width: '65%',
    backgroundColor: '',
    padding: 5,
    marginLeft: 15,
  },
  addRemoveButtonSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
