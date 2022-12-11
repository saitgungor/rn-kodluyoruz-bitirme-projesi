import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './ProfileSettings.style';
import Input from '../../components/Input/Input';
import {useDispatch} from 'react-redux';
import {updateUserInfo, logoutFB} from '../../firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateBio, updateName, updateUserName} from '../../redux/infoSlice';
import {useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';
const ProfileSettings = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const dispatch = useDispatch();

  // const updateUserInfoHandler = async () => {
  //   const userInfo = await updateUserInfo(name, userName, bio);
  //   dispatch(updateName(userInfo.name));
  //   dispatch(updateUserName(userInfo.userName));
  //   dispatch(updateBio(userInfo.bio));
  // };

  const handleUpdate = () => {
    const firestore = firebase.firestore();
    const userRef = firestore.collection('users').doc('uid');
    console.log(firestore.collection('users').doc('users'));

    userRef
      .update({
        name: name,
        username: userName,
      })
      .then(() => {
        console.log('User updated!');
        // Update successful.
      })
      .catch(error => {
        console.log(error);
        // Handle error.
      });
  };

  const logoutHandler = async () => {
    await logoutFB();
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
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText} onPress={handleUpdate}>
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutHandler} style={style.button}>
        <Text style={style.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettings;
