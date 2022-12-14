import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './Profile.style';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {selectUserId} from '../../redux/authSlice';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
const Profile = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const userId = useSelector(selectUserId);

  useEffect(() => {
    // Fetch the users data from Firestore
    firestore()
      .collection('Users')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        const fetchedUsers = snapshot.docs.map(doc => doc.data());
        setUsers(fetchedUsers);
      });
  }, [userId]);

  console.log(users);

  const navigateBookmarkScreen = () => {
    navigation.navigate('Bookmark');
  };
  return (
    <View style={style.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ProfileCard info={item} onSelect={navigateBookmarkScreen} />
        )}
        keyExtractor={item => item.userId}
      />
    </View>
  );
};

export default Profile;
