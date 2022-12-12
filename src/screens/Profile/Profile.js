import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './Profile.style';
import Bookmark from '../Bookmark';
import {Pressable} from 'react-native';
import Colors from '../../utils/ui/color';
import {useDispatch, useSelector} from 'react-redux';
import {infoSelector} from '../../redux/infoSlice';
import firestore from '@react-native-firebase/firestore';
import {getUserInfo} from '../../firebase/firebase';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const info = useSelector(infoSelector);
  console.log(info);
  const navigateBookmarkScreen = () => {
    navigation.navigate('Bookmark');
  };

  return (
    <View style={style.container}>
      <View style={style.firstContainer}>
        <Image
          style={style.profileImage}
          source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}}
        />
        <Text style={style.name}>{info.name}</Text>
        <Text style={style.userName}>{info.userName}</Text>
        <Text style={style.bio}>{info.bio}</Text>
      </View>
      <View style={style.secondContainer}>
        <Bookmark />
      </View>
      <Pressable onPress={navigateBookmarkScreen}>
        <Text style={style.updateBookmark}>
          Do you want to edit your{' '}
          <Text style={{color: Colors.quaternary}}>bookmarks</Text> ?
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;
