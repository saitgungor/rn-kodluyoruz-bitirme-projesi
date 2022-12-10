import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './ProfileSettings.style';
import Input from '../../components/Input/Input';

const ProfileSettings = () => {
  return (
    <View style={style.container}>
      <View style={style.firstContainer}>
        <Image
          style={style.profileImage}
          source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}}
        />
        <Text style={style.changeName}>Change profile photo</Text>
      </View>
      <View style={style.secondContainer}>
        <Text style={style.name}>Name</Text>
        <Input placeholder="Enter your name" style={style.input} />
        <Text style={style.name}>Username</Text>
        <Input placeholder="Enter your username" style={style.input} />
        <Text style={style.name}>Bio</Text>
        <Input placeholder="Enter your bio" style={[style.input, style.bio]} />
      </View>
    </View>
  );
};

export default ProfileSettings;
