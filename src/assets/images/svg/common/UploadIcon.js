
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const UploadIcon = ({ size = 24, color = "black" }) => {


    return (
<Svg width={size} height={size} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.1793 15V10.7143H12.8938L9.50068 6.42857L6.10758 10.7143H8.82206V15H5.42896V14.9643C5.31495 14.9714 5.20637 15 5.08965 15C3.73979 15 2.44522 14.4356 1.49072 13.4309C0.536229 12.4263 0 11.0637 0 9.64286C0 6.89429 1.97478 4.65429 4.50875 4.34714C4.73092 3.12471 5.35085 2.02197 6.26191 1.22858C7.17298 0.435197 8.31822 0.000762881 9.50068 0C10.6833 0.000688089 11.8287 0.435064 12.74 1.22843C13.6513 2.0218 14.2715 3.12458 14.494 4.34714C17.0279 4.65429 19 6.89429 19 9.64286C19 11.0637 18.4638 12.4263 17.5093 13.4309C16.5548 14.4356 15.2602 15 13.9104 15C13.7963 15 13.6864 14.9714 13.571 14.9643V15H10.1793Z" fill={color} fill-opacity="0.53"/>
</Svg>


    );
};

export default UploadIcon;








