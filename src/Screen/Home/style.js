import {Colors, FONTS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  userContainer: {
    width: 320,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImg: {
    width: 50,
    height: 50,

    borderRadius: 50,
  },
  userName: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 18,

    lineHeight: 27,
    color: Colors.black,
  },

  mainBookContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    flexWrap: 'wrap',
  },
  indicator: {
    height: 500,
  },
  heartContainer: {
    position: 'absolute',
    width: 25,
    alignItems: 'center',
    height: 25,
    justifyContent: 'center',
    borderRadius: 12,
    top: 10,
    right: 10,
    backgroundColor: Colors.white,
    zIndex: 999,
  },
  flatContainer:{
    marginTop:20
  },
  bookContainer: {
    marginBottom: 20,
    width: 140,
    marginHorizontal:20
  },
  bookImage: {
    width: 140,
    height: 219,
    borderRadius: 9,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  bookTitle: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: FONTS.poppinsSemiBold,
    marginBottom: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    color: Colors.grey1,
  },
  price: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: FONTS.poppinsMedium,
  },
});

export default styles;
