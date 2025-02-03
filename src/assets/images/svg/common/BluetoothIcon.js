import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle} from 'react-native-svg';
import {wp, hp} from '../../../../utils';
const BluetoothIcon = ({size = 24, color = '#0D7EE5'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15.584 7.28782L18.5862 9.64326L15.5858 11.9967L15.584 7.28782ZM15.584 21.7064L18.5862 19.3514L15.5858 16.9975L15.584 21.7064ZM12.3785 14.4971L5.88839 9.39232L7.76957 7.91686L12.9396 11.975V2.25005L22.3425 9.62635L16.134 14.4971L22.3436 19.3693L12.9404 26.7457V17.0201L7.76894 21.0787L5.88766 19.6024L12.3785 14.4971ZM14.1173 28.7423C22.0458 28.7423 27.5089 25.7871 27.5089 14.4976C27.5089 3.20852 22.0458 0.253906 14.1173 0.253906C6.1891 0.253906 0.723145 3.20901 0.723145 14.4976C0.723145 25.7872 6.18858 28.7423 14.1173 28.7423Z" fill="#0060A9"/>
    </Svg>
  );
};

export default BluetoothIcon;