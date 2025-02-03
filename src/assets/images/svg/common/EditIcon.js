import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const EditIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4.20062 5.01172H3.13375C2.56784 5.01172 2.02512 5.20719 1.62496 5.55514C1.2248 5.90309 1 6.375 1 6.86708V15.2162C1 15.7083 1.2248 16.1802 1.62496 16.5281C2.02512 16.8761 2.56784 17.0715 3.13375 17.0715H12.7356C13.3015 17.0715 13.8442 16.8761 14.2444 16.5281C14.6445 16.1802 14.8694 15.7083 14.8694 15.2162V14.2885" stroke="#6712B9" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M13.8031 3.16014L17.0037 5.94318M18.4813 4.63051C18.9015 4.26515 19.1376 3.76961 19.1376 3.25291C19.1376 2.73621 18.9015 2.24067 18.4813 1.87531C18.0611 1.50995 17.4912 1.30469 16.897 1.30469C16.3028 1.30469 15.7329 1.50995 15.3127 1.87531L6.33496 9.65389V12.4369H9.53558L18.4813 4.63051Z" stroke="#6712B9" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
        

    );
};

export default EditIcon;
