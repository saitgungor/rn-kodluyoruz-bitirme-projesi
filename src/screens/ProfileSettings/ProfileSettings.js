import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './ProfileSettings.style';
import Input from '../../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserInfo, logoutFB} from '../../firebase/firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  infoSelector,
  updateBio,
  updateName,
  updateUserName,
} from '../../redux/infoSlice';
import {useState} from 'react';
import {logout} from '../../redux/authSlice';

const ProfileSettings = ({navigation}) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const info = useSelector(infoSelector);
  const dispatch = useDispatch();

  console.log(name, userName, bio);

  const handleUpdateBio = () => {
    dispatch(updateBio(bio));
    dispatch(updateName(name));
    dispatch(updateUserName(userName));
    navigation.goBack();
  };

  const logoutHandler = async () => {
    const logAuth = await logoutFB();
    console.log(logAuth);
    dispatch(logout());
  };

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
        <Input
          placeholder="Enter your name"
          style={style.input}
          onChangeText={setName}
        />
        <Text style={style.name}>Username</Text>
        <Input
          placeholder="Enter your username"
          style={style.input}
          onChangeText={setUserName}
        />
        <Text style={style.name}>Bio</Text>
        <Input
          placeholder="Enter your bio"
          style={[style.input, style.bio]}
          onChangeText={setBio}
        />
      </View>
      <TouchableOpacity onPress={handleUpdateBio} style={style.button}>
        <Text style={style.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutHandler} style={style.button}>
        <Text style={style.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettings;
