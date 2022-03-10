import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

import {Spacing} from '../../../theme/standardSizes';
import AppStatusBar from '../../../components/atoms/AppStatusBar';
import AppHeader from '../../../components/atoms/AppHeader';
import AppSearchBar from '../../../components/atoms/AppSearchBar';
import colors from '../../../theme/color';
import AppIcon from '../../../components/atoms/AppIcon';
import {hp, wp} from '../../../theme/responsiveness';
import AppIconWithCustomBg from '../../../components/molecules/AppIconWithCustomBg';
import AppText from '../../../components/atoms/AppText';
import {gotham} from '../../../utils/fonts';
import {
  allProductsFakeData,
  announcementFakeData,
} from '../../../mock/fakeApiData';
import VegetableCard from '../../../components/organisms/VegetableCard';
import AppChips from '../../../components/atoms/AppChips';
import {groceryVariants} from '../../../constants/AppStaticElements';
import AnnouncementCard from '../../../components/organisms/AnnouncementCard';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../redux/actions/cartActions';
import RouteName from '../../../constants/RouteName';
import NoDataFound from '../../../components/molecules/NoDataFound';

//ICONS
const FILTER_ICON = require('../../../assets/icons/search-filter-icon.png');
const ADD_TO_CART_ICON = require('../../../assets/icons/add-to-cart-icon.png');
const AllProductsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const totalAddedItemToCart = useSelector(state => state.totalAddedItems);
  const CarouselRef = useRef(null);
  const [allProductBasedOnType, setAllProductBasedOnType] =
    useState(allProductsFakeData);
  const [selectedGroceryVariant, setSelectedGroceryVariant] = useState(
    groceryVariants[1].route,
  );
  const _OnItemCardPress = item => {
    if (totalAddedItemToCart === 0)
      return Alert.alert('Cart is Empty', 'would you like to buy this item', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(addToCart(item));
            return navigation.navigate(RouteName.ADD_TO_CART);
          },
        },
      ]);
    navigation.navigate(RouteName.ADD_TO_CART);
  };
  const _onChangeProductVariant = item => {
    if (item.route == 0 || item.route == 1) {
      setAllProductBasedOnType(allProductsFakeData);
      return setSelectedGroceryVariant(item.route);
    }
    setAllProductBasedOnType([]);
    return setSelectedGroceryVariant(item.route);
  };
  return (
    <AppStatusBar>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText fontSize={wp(4)} fontFamily={gotham.LightItalic}>
            Grocery at your door step!
          </AppText>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.ADD_TO_CART)}>
            <AppIconWithCustomBg
              bgColor={colors.light_orange}
              source={ADD_TO_CART_ICON}
            />
            <View style={styles.addToCartIcon}>
              <AppText
                fontFamily={gotham.BoldItalic}
                fontSize={wp(2)}
                color={colors.white}>
                {totalAddedItemToCart}
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchSection}>
          <AppSearchBar style={{width: '90%'}} placeholder="Search Grocery" />
          <AppIconWithCustomBg
            bgColor={colors.secondary}
            source={FILTER_ICON}
          />
        </View>
        <View style={styles.announcementSection}>
          <Carousel
            ref={CarouselRef}
            layout="default"
            layoutCardOffset={`18`}
            data={announcementFakeData}
            // pagingEnabled
            // scrollEnabled
            renderItem={({item, index}) => {
              return (
                <AnnouncementCard
                  index={index}
                  navigation={navigation}
                  item={item}
                />
              );
            }}
            sliderWidth={wp(90)}
            itemWidth={wp(70)}
          />
        </View>
        <View style={styles.tagsSection}>
          {groceryVariants.map((item, index) => (
            <TouchableOpacity onPress={() => _onChangeProductVariant(item)}>
              <AppChips
                type={
                  selectedGroceryVariant === item.route
                    ? 'selected'
                    : 'unSelected'
                }
                title={item.name}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.productDisplaySection}>
          <AppText fontFamily={gotham.Bold}>Explore Fresh Vegetables</AppText>
          {allProductBasedOnType.length > 0 ? (
            <FlatList
              data={allProductBasedOnType}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                alignContent: 'center',
                paddingBottom: 20,
              }}
              renderItem={({item, index}) => {
                return (
                  <VegetableCard
                    index={index}
                    navigation={navigation}
                    item={item}
                    onCardPress={() => _OnItemCardPress(item)}
                  />
                );
              }}
            />
          ) : (
            <NoDataFound message="Not item Found!" />
          )}
        </View>
      </View>
    </AppStatusBar>
  );
};

export default AllProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.screenVerticalMargin,
    paddingHorizontal: Spacing.screenHorizontalPadding,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  addToCartIcon: {
    position: 'absolute',
    backgroundColor: colors.red,
    paddingHorizontal: 2,
    right: 0,
    top: -hp(0.5),
    borderRadius: 10,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  announcementSection: {
    height: hp(12),
  },
  tagsSection: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },

  productDisplaySection: {
    marginTop: 5,
    flex: 1,
  },
});
3;
