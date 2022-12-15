import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './Profile.style';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {selectUserId} from '../../redux/authSlice';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
import Loading from '../../components/Animations/Loading';
import Error from '../../components/Animations/Error';
import {infoSelector} from '../../redux/infoSlice';
const Profile = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const userId = useSelector(selectUserId);
  const userInfo = useSelector(infoSelector);
  console.log('userInfo', userInfo);
  useEffect(() => {
    try {
      const unsubscribe = firestore()
        .collection('Users')
        .where('userId', '==', userId)
        .onSnapshot(snapshot => {
          const fetchedUsers = snapshot.docs.map(doc => doc.data());
          setUsers(fetchedUsers);
        });
      return () => unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }, [userId]);

  console.log(users);
  // const uploadAndUpdatePicture = async () => {
  //   // Upload the image to Firebase Storage
  //   const pictureUrl = await storage()
  //     .ref(`profilePictures/${userId}`)
  //     .put(image);

  //   // Update the user's document in Firestore
  //   await firestore().collection('users').doc(userId).update({
  //     picture: pictureUrl,
  //   });
  // };

  // // Call the async function to upload and update the user's picture
  // uploadAndUpdatePicture();

  const navigateBookmarkScreen = () => {
    navigation.navigate('Bookmark');
  };

  return (
    <View style={style.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ProfileCard
            info={item}
            infoSelector={userInfo}
            onSelect={navigateBookmarkScreen}
          />
        )}
        keyExtractor={item => item.userId}
      />
    </View>
  );
};

export default Profile;
