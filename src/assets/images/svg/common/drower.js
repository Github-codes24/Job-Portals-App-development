
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const Drower = ({ size = 24, color = "black" }) => {


    return (

       <Svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1 1H21M1 8H21M1 15H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

        

    );
};

export default Drower;









