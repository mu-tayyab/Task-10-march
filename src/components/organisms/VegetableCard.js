import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import AppText from '../atoms/AppText';
import {hp, wp} from '../../theme/responsiveness';
import {gotham} from '../../utils/fonts';
import AppIcon from '../atoms/AppIcon';
import colors from '../../theme/color';
import screenRouteName from '../../constants/RouteName';
import AppIconWithCustomBg from '../molecules/AppIconWithCustomBg';
import {addToCart} from '../../redux/actions/cartActions';
import {useDispatch} from 'react-redux';
const PLUS_ICON = require('../../assets/icons/plus-icon.png');

const RATING_ICON = require('../../assets/icons/rating-star-icon.png');
const VegetableCard = ({item, onCardPress, navigation, ...props}) => {
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
        style={styles.imageStyle}
        source={item.imageUrl}
      />
      <View style={{marginTop: 7}}>
        <AppText fontSize={wp(4)} fontFamily={gotham.BoldItalic}>
          {item.name}
        </AppText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AppText
            fontSize={wp(3.5)}
            color={'black'}
            fontFamily={gotham.Medium}>
            {item.price}
            <AppText
              fontSize={wp(2.7)}
              color={'black'}
              fontFamily={gotham.LightItalic}>
              /{item.unit}
            </AppText>
          </AppText>
          <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
            <AppIconWithCustomBg
              bgColor={colors.light_orange}
              iconSize={wp(3.5)}
              source={PLUS_ICON}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppIcon size={wp(3)} tintColor="orange" source={RATING_ICON} />
          <AppText
            fontSize={wp(2.2)}
            style={{marginLeft: 2}}
            color={colors.grey2}
            fontFamily={gotham.LightItalic}>
            {item.rating.score}
          </AppText>
          <AppText
            style={{marginLeft: 2}}
            fontSize={wp(1.8)}
            color={colors.grey2}
            fontFamily={gotham.Regular}>
            {`(${item.rating.totalReviews})`}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VegetableCard;

const styles = StyleSheet.create({
  card: {
    height: hp(30),
    width: '48%',
    padding: 10,
    backgroundColor: colors.secondary,
    marginRight: wp(4),
    marginTop: wp(4),
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '70%',
    backgroundColor: 'green',
    borderRadius: 15,
  },
});
