import React from 'react';

//style
import { Wrap } from './index.styles';

//images
import NoImage from '../../assets/image/NoImage';
import RatingIcon from '../../assets/image/RatingIcon';
import GroupButton from '../../assets/image/GroupButton';

function Banner() {
    return (
        <Wrap>
            <div className="wrap-content container-fluid">
                <NoImage className="image-size" />
            </div>
            <div className="container-fluid">
                <div className="flex-content">
                    <div className="text-white large-title">GAMELOF GAME</div>
                        <div  className="content-item">
                            <div>
                                <div className="text-white small-title d-flex align-items-center">
                                    Tycoon / Simulation <span className='mx-3'>|</span><RatingIcon />
                                </div>
                                <div className="text-white description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse incidunt facere placeat! Cupiditate saepe vitae deleniti ipsa fugiat, sed repudiandae perferendis porro. Iure illo, maiores sapiente voluptatem itaque eum.</div>
                            </div>
                            <GroupButton className='icon-images'/>
                        </div>
                </div>
            </div>
        </Wrap>  
    );
}

export default Banner;