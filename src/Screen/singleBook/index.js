import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';

import {ICONS} from '../../assets/icons';
import styles from './style';
import {Colors} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../../components';

const SingleBook = ({route}) => {
  const {book} = route.params;

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.bookContainer}>
          <Image style={styles.image} source={{uri: book.imageLink}} />
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>Rating</Text>
              <ICONS.StarIcon />
            </View>
            <View style={styles.reviews}>
              <Text style={styles.reviewsText}>Reviews</Text>
              <Text>{book.reviews}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}> Price</Text>
              <Text> ${book.price} </Text>
            </View>
          </View>
        </View>
        <View style={styles.mainDescription}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text>
            <Text style={styles.title}>Author : </Text>
            <Text style={styles.titleValue}>{book.author} </Text>
          </Text>
          <Text>
            <Text style={styles.title}>Country: </Text>
            <Text style={styles.titleValue}>{book.country}</Text>
          </Text>
          <Text>
            <Text style={styles.title}>Language: </Text>
            <Text style={styles.titleValue}>{book.language}</Text>
          </Text>
          <Text>
            <Text style={styles.title}>Year: </Text>
            <Text style={styles.titleValue}>{book.year}</Text>
          </Text>
          <Text>
            <Text style={styles.title}>Pages: </Text>
            <Text style={styles.titleValue}> {book.pages} </Text>
          </Text>
        </View>
        <MyButton
          bgColor={Colors.indigo}
          textColor={Colors.white}
          Label={'View Details'}
          width={'auth'}
        />
      </View>
    </ScrollView>
  );
};

export default SingleBook;
