import React from 'react';
import PropTypes from 'prop-types';
//images
import NoImage from '../../assets/image/NoImage';
import RatingIcon from '../../assets/image/RatingIcon';
//style
import { Wrap } from './index.styles';

function HomePage() {
    return (
        <Wrap>
            <div className="wrap-content container-fluid">
                <NoImage className="image-size" />
            </div>
            <div className="container-fluid">
                <div className="text-white large-title">GAMELOF GAME</div>
                <div className="text-white small-title d-flex align-items-center">
                    Tycoon / Simulation <span className='mx-3'>|</span><RatingIcon />
                </div>
                <div className="text-white description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse incidunt facere placeat! Cupiditate saepe vitae deleniti ipsa fugiat, sed repudiandae perferendis porro. Iure illo, maiores sapiente voluptatem itaque eum.</div>
            </div>
            
        </Wrap>
    );
}

export default HomePage;