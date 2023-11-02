import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '../../assets';
import styles from './style';
import {InputField} from '../../components';
import {ICONS} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {BooksData} from '../../Redux/Reducers/BookReducer';

const Home = () => {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {books, isLoading, isSuccess} = useSelector(state => state.Book);
  const data = books.data;
  console.log("🚀 ~ file: index.js:29 ~ Home ~ data:", data)

  useEffect(() => {
    dispatch(BooksData());
    if (isSuccess) {
      setBookData(data);
    }
  }, [isSuccess]);
  
  useEffect(() => {
    if (search && data) {
      const filterData = data.filter(item => {
        const value = item.title.toLowerCase();
        return value.includes(search.toLowerCase());
      });
      setBookData(filterData);
      console.log('🚀 ~ file: index.js:37 ~ useEffect ~ search:', search);
      console.log('filterData', filterData);
    } else {
      if (isSuccess) {
        setBookData(data);
      }
    }
  }, [search]);

  const handleSingleBook = book => {
    navigation.navigate('singleBook', {book});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userContainer}>
        <Text style={styles.userName}> Hi Nick </Text>
        <Image style={styles.userImg} source={IMAGES.user} />
      </View>
      <InputField
        value={search}
        placeholder={'Search...'}
        onChangeText={text => setSearch(text)}
      />
      {isLoading ? (
        <ActivityIndicator size={'large'} style={styles.indicator} />
      ) : (
        <FlatList
          style={styles.flatContainer}
          data={bookData}
          numColumns={2}
          keyExtractor={item => `${item.title}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => handleSingleBook(item)}
              style={styles.bookContainer}>
              <Pressable style={styles.heartContainer}>
                <ICONS.HeartIcon isFav={item.is_liked} />
              </Pressable>
              <Image source={{uri: item.imageLink}} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <View style={styles.ratingContainer}>
                <ICONS.StarIcon />
                <Text style={styles.ratingText}> {item.reviews} </Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default Home;
