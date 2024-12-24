

import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle} from 'react-native-svg';
import {wp, hp} from '../../../../utils';
const SearchIcon = ({size = 24, color = '#0D7EE5'}) => {
  return (
   <Svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M23.3252 18.4395L19.1417 14.6318C20.0061 13.446 20.512 12.0262 20.512 10.5C20.512 6.3645 16.8156 3 12.272 3C7.72851 3 4.03204 6.3645 4.03204 10.5C4.03204 14.6355 7.72851 18 12.272 18C13.9489 18 15.5087 17.5395 16.8115 16.7528L20.9949 20.5605C21.6376 21.1462 22.6825 21.1462 23.3252 20.5605C23.9687 19.9748 23.9687 19.0252 23.3252 18.4395ZM6.50404 10.5C6.50404 7.605 9.0914 5.25 12.272 5.25C15.4527 5.25 18.04 7.605 18.04 10.5C18.04 13.395 15.4527 15.75 12.272 15.75C9.0914 15.75 6.50404 13.395 6.50404 10.5Z" fill="#B9B9B9"/>
</Svg>

  );
};

export default SearchIcon;