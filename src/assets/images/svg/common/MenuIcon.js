import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle} from 'react-native-svg';
import {wp, hp} from '../../../../utils';

const MenuIcon = ({size = 24, color = '#0D7EE5'}) => {
  return (
     <Svg width={size} height={size} viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M3 14.1247H21V12.6228H3V14.1247ZM3 10.3699H21V8.86804H3V10.3699ZM3 5.11328V6.61518H21V5.11328H3Z" fill="#666666"/>
</Svg>
  );
};

export default MenuIcon;