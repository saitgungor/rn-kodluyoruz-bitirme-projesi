import {Dimensions} from 'react-native';

export const window = Dimensions.get('window');
export const screen = Dimensions.get('screen');

export const width = window.width;
export const height = window.height;

export const Width = d => (width * d) / 100;
export const Height = d => (height * d) / 100;
