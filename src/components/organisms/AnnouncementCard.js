import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import AppText from '../atoms/AppText';
import {hp, wp} from '../../theme/responsiveness';
import {gotham} from '../../utils/fonts';
import colors from '../../theme/color';
import LinearGradient from 'react-native-linear-gradient';

const AnnouncementCard = ({item, ...props}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
        source={item.imageUrl}>
        <LinearGradient
          colors={['black', 'transparent']}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 1]}>
          <View style={styles.announcementInfo}>
            <AppText
              fontSize={wp(4)}
              numberOfLines={3}
              color={colors.white}
              fontFamily={gotham.BoldItalic}>
              {item.text}
            </AppText>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AnnouncementCard;

const styles = StyleSheet.create({
  card: {
    // height: hp(15),
    backgroundColor: '#F8F9FA',
    marginRight: wp(4),
    marginTop: wp(4),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  announcementInfo: {
    padding: 5,
    width: wp(30),
  },
  linearGradient: {
    flex: 1,
  },
});
