import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './ProfileSettings.style';
import Input from '../../components/Input/Input';
import {useDispatch} from 'react-redux';
import {addUserInfo, logoutFB, updateUserInfo} from '../../firebase/firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateBio, updateName, updateUserName} from '../../redux/infoSlice';
import {useState} from 'react';
import {logout} from '../../redux/authSlice';

const ProfileSettings = ({navigation}) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const dispatch = useDispatch();

  const handleUpdateBio = async () => {
    dispatch(updateName(name));
    dispatch(updateUserName(userName));
    dispatch(updateBio(bio));
    await addUserInfo({name, userName, bio});
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
          value={name}
        />
        <Text style={style.name}>Username</Text>
        <Input
          placeholder="Enter your username"
          style={style.input}
          onChangeText={setUserName}
          value={userName}
        />
        <Text style={style.name}>Bio</Text>
        <Input
          placeholder="Enter your bio"
          style={[style.input, style.bio]}
          onChangeText={setBio}
          value={bio}
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
