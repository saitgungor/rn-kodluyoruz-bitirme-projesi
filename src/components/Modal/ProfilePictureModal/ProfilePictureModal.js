import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import style from './ProfilePictureModal.style';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfileImage} from '../../../redux/infoSlice';
import {uploadImage} from '../../../firebase/firebase';
import {selectUserId} from '../../../redux/authSlice';
const ProfilePictureModal = ({visible, onClose, onSend}) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const handleTakePicture = () => {
    // Code to take a picture goes here
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      dispatch(updateProfileImage(image.path));
      uploadImage(image.path, userId);
    });
  };

  const handleChooseFromGallery = () => {
    // Code to choose a picture from the gallery goes here
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      dispatch(updateProfileImage(image.path));
    });
  };
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={style.modal}>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Text style={style.title}>Upload Photo</Text>
          <Text style={style.description}>Choose Your Profile Picture</Text>
        </View>
        <React.Fragment>
          <TouchableOpacity onPress={handleTakePicture} style={style.button}>
            <Text style={style.buttonText}>Take picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleChooseFromGallery}
            style={style.button}>
            <Text style={style.buttonText}>Choose From Library</Text>
          </TouchableOpacity>
        </React.Fragment>
        <TouchableOpacity onPress={onClose} style={style.button}>
          <Text style={style.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfilePictureModal;
