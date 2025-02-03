import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const CrossIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect x="1" y="1" width="50" height="50" rx="25" fill="#DCBDED"/>
<Rect x="1" y="1" width="50" height="50" rx="25" stroke="white" stroke-width="2"/>
<Path d="M32.75 19.25L19.25 32.75" stroke="#7900BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M32.75 32.75L19.25 19.25" stroke="#7900BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
        

    );
};

export default CrossIcon;