import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle,ClipPath, Defs} from 'react-native-svg';
import {wp, hp} from '../../../../utils';
const GmailIcon = ({size = 24, color = '#0D7EE5'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_1882_24974)">
    <Path d="M6.52463 20.093V10.1651L3.59414 7.34827L0.966309 5.78516V18.341C0.966309 19.3104 1.71386 20.093 2.63384 20.093H6.52463Z" fill="#4285F4"/>
    <Path d="M19.8647 20.0929H23.7555C24.6783 20.0929 25.4231 19.3074 25.4231 18.3409V5.78516L22.4466 7.57552L19.8647 10.165V20.0929Z" fill="#34A853"/>
    <Path d="M6.52473 10.1661L6.12598 6.28694L6.52473 2.57422L13.1947 7.83018L19.8646 2.57422L20.3107 6.08649L19.8646 10.1661L13.1947 15.422L6.52473 10.1661Z" fill="#EA4335"/>
    <Path d="M19.8647 2.57331V10.1652L25.4231 5.78527V3.44927C25.4231 1.28271 23.0691 0.0476143 21.4212 1.34695L19.8647 2.57331Z" fill="#FBBC04"/>
    <Path d="M0.966309 5.78531L3.52268 7.79981L6.52463 10.1652V2.57336L4.9682 1.347C3.31738 0.0475599 0.966309 1.28276 0.966309 3.44922V5.78531Z" fill="#C5221F"/>
    </G>
    <Defs>
    <ClipPath id="clip0_1882_24974">
    <Rect width="24.4565" height="19.3721" fill="white" transform="translate(0.966309 0.816406)"/>
    </ClipPath>
    </Defs>
    </Svg>
  );
};

export default GmailIcon;