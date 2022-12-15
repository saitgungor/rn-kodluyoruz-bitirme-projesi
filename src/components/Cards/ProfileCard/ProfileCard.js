import {View, Text, Image} from 'react-native';
import React from 'react';
import Bookmark from '../../../screens/Bookmark';
import {Pressable} from 'react-native';
import style from './ProfileCard.style';
import firestore from '@react-native-firebase/firestore';
const ProfileCard = ({info, userId, onSelect, infoSelector}) => {
  return (
    <View style={style.container}>
      <View style={style.firstContainer}>
        <Image
          style={style.profileImage}
          source={{uri: info.avatar || infoSelector.avatar}}
        />
        <Text style={style.name}>{info.name}</Text>
        <Text style={style.userName}>{info.userName}</Text>
        <Text style={style.bio}>{info.bio}</Text>
      </View>
      <View style={style.secondContainer}>
        <Bookmark />
      </View>
      <Pressable onPress={onSelect}>
        <Text style={style.updateBookmark}>
          Do you want to edit your{' '}
          <Text style={style.bookmarkText}>bookmarks</Text> ?
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;
