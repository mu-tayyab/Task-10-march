import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import AppHeader from '../../../components/atoms/AppHeader';
import {Spacing} from '../../../theme/standardSizes';
import {hp} from '../../../theme/responsiveness';
import AppStatusBar from '../../../components/atoms/AppStatusBar';
import CartCard from '../../../components/organisms/CartCard';
import AppHorizontalHeadings from '../../../components/molecules/AppHorizontalHeadings';
import AppDivider from '../../../components/atoms/AppDivider';
import AppButton from '../../../components/atoms/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {onCheckOut} from '../../../redux/actions/cartActions';
import NoDataFound from '../../../components/molecules/NoDataFound';

const AddToCartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const totalAddedItemToCart = useSelector(state => state.totalAddedItems);
  const totalPrice = useSelector(state => state.totalPrice);
  const totalItemInCart = useSelector(state => state.addedItems);

  const _onCheckOut = () => {
    dispatch(onCheckOut());
    navigation.goBack();
  };

  return (
    <AppStatusBar color={'#E9ECEF'}>
      <AppHeader navigation={navigation} color="#E9ECEF" title="Add to cart" />
      <View style={styles.container}>
        <View style={styles.cartItemsContainer}>
          {totalItemInCart.length > 0 ? (
            <ScrollView
              horizontal={false}
              scrollEnabled
              showsVerticalScrollIndicator={false}>
              {totalItemInCart.map((item, index) => {
                return (
                  <CartCard index={index} navigation={navigation} item={item} />
                );
              })}
            </ScrollView>
          ) : (
            <NoDataFound message="No Item in Cart" />
          )}
        </View>
        <View style={styles.cartInfo}>
          <AppHorizontalHeadings
            left={`items (${totalAddedItemToCart})`}
            right={totalPrice}
          />
          <AppHorizontalHeadings
            left="Delivery Service"
            right={totalItemInCart > '0' ? '10' : '0'}
          />
          <AppDivider />
          <AppHorizontalHeadings
            left="Total Price"
            right={totalItemInCart > '0' ? totalPrice + 10 : totalPrice}
          />
          <AppButton
            onPress={_onCheckOut}
            btnStyle={{marginTop: 20}}
            title="CHECKOUT"
          />
        </View>
      </View>
    </AppStatusBar>
  );
};

export default AddToCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.screenVerticalMargin,
    paddingHorizontal: Spacing.screenHorizontalPadding,

    backgroundColor: '#E9ECEF',
  },
  cartItemsContainer: {
    height: hp(58),
  },

  cartInfo: {
    flex: 1,
    padding: 15,
  },
});
3;
