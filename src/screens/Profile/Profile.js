import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './Profile.style';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {selectUserId} from '../../redux/authSlice';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
import Loading from '../../components/Animations/Loading';
import {infoSelector} from '../../redux/infoSlice';
const Profile = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector(selectUserId);
  const userInfo = useSelector(infoSelector);

  useEffect(() => {
    try {
      const unsubscribe = firestore()
        .collection('Users')
        .where('userId', '==', userId)
        .onSnapshot(snapshot => {
          const fetchedUsers = snapshot.docs.map(doc => doc.data());
          setUsers(fetchedUsers);
          setLoading(false);
        });
      return () => unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const navigateBookmarkScreen = () => {
    navigation.navigate('Bookmark');
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={style.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ProfileCard
            info={item}
            userId={userId}
            infoSelector={userInfo}
            onSelect={navigateBookmarkScreen}
          />
        )}
      />
    </View>
  );
};

export default Profile;
