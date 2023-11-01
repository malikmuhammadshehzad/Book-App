import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FONTS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    marginHorizontal: 7,
  },
  arrowContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  bookContainer: {
    height: 490,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    padding: 20,
    marginBottom: 19,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: 300,
    height: 410,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginBottom: 7,
    marginTop: 15,
  },
  ratingContainer: {
    height: 44,
    width: 300,
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  rating: {
    width: 73,

    alignItems: 'center',
  },
  ratingText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
  },
  reviews: {
    width: 71,
    alignItems: 'center',
  },
  reviewsText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
  },
  price: {
    width: 71,
    alignItems: 'center',

    marginRight: -12,
  },
  priceText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
  },
  mainDescription: {
    marginBottom: 27,
  },

  bookTitle: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 22,
    color: Colors.black,
    marginBottom: 9,
  },

  title: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 16,
    color: Colors.black,
  },
  titleValue: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 16,
    color: Colors.black,
  },
});

export default styles;
