import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './Profile.style';
const Profile = () => {
  return (
    <View style={style.container}>
      <View style={style.firstContainer}>
        <Image
          style={style.profileImage}
          source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}}
        />
        <Text style={style.name}>Jennie Kim</Text>
        <Text style={style.userName}>@jenniekim</Text>
        <Text style={style.bio}>
          I love watching Anime while enjoying a cup of hot caremel machiatto
        </Text>
      </View>
      <View style={style.secondContainer}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
