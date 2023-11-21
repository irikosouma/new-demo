import React from 'react';

//images
import NoImage from '../../assets/image/NoImage';
import RatingIcon from '../../assets/image/RatingIcon';
import GroupButton from '../../assets/image/GroupButton';

//component
import DownLoad from '../download';
import Signin from '../signin';
import Contact from '../contact';
import SpecialComponent from '../special-event';
import GameContent from '../game-content';
import Banner from '../banner';

function HomePage() {
    return (
        <>
            <Banner />
            <DownLoad />
            <Signin />
            <Contact/>
            <SpecialComponent/>
            <GameContent/>
        </>
    );     
}

export default HomePage;