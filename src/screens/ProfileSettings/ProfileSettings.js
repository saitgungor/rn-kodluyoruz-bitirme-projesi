import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfileSettings.style';
import Input from '../../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {logoutFB, updateUser} from '../../firebase/firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logout, selectUserId} from '../../redux/authSlice';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Colors from '../../utils/ui/color';
import {
  infoSelector,
  updateBio,
  updateName,
  updateUserName,
} from '../../redux/infoSlice';
import ProfilePictureModal from '../../components/Modal/ProfilePictureModal/ProfilePictureModal';
const ProfileSettings = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required Full Name'),
    userName: Yup.string().required('Required User Name'),
    bio: Yup.string().required('Required Bio'),
  });

  const userId = useSelector(selectUserId);
  const userInfo = useSelector(infoSelector);

  const onSubmit = async values => {
    try {
      const user = await updateUser(values, userId);
    } catch (error) {
      console.log(error);
    }
    dispatch(updateName(values.fullName));
    dispatch(updateBio(values.bio));
    dispatch(updateUserName(values.userName));
    navigation.goBack();
  };

  const logoutHandler = async () => {
    const logAuth = await logoutFB();
    console.log(logAuth);
    dispatch(logout());
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleModalClose = () => {
    setShowModal(!showModal);
  };
  const handleModalSend = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={styles.profileImage}
            source={{uri: userInfo.profileImage}}
          />
          <Text style={styles.changeName}>Change profile photo</Text>
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{fullName: '', userName: '', bio: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.secondContainer}>
              <Text style={styles.name}>Name</Text>
              <Input
                style={styles.input}
                label="Enter your name"
                mode="outlined"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                placeholder="Full Name"
                textColor={Colors.grey300}
              />
              {errors.fullName && touched.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}
              <Text style={styles.name}>Username</Text>
              <Input
                style={styles.input}
                label="Enter your username"
                mode="outlined"
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                placeholder="User Name"
                secureTextEntry={true}
                textColor={Colors.grey300}
              />
              {errors.userName && touched.userName && (
                <Text style={styles.error}>{errors.userName}</Text>
              )}
              <Text style={styles.name}>Bio</Text>
              <Input
                style={[styles.input, styles.bio]}
                label="Enter your bio"
                mode="outlined"
                onChangeText={handleChange('bio')}
                onBlur={handleBlur('bio')}
                value={values.bio}
                placeholder="Bio"
                textColor={Colors.grey300}
              />
              {errors.bio && touched.bio && (
                <Text style={styles.error}>{errors.bio}</Text>
              )}
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={logoutHandler} style={styles.button}>
                <Text style={styles.buttonText}>LogOut</Text>
              </TouchableOpacity>
            </View>
            <ProfilePictureModal
              visible={showModal}
              onClose={handleModalClose}
              onSend={handleModalSend}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default ProfileSettings;
