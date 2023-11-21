import React from 'react';
import "./style.css"
import {Wrap} from './index.styles';

import Placeholder from '../../assets/image/Placeholder';
import SubmitButton from '../button/SubmitButton';

function CardSlideSpecial(props: any) {
    return (
        <Wrap>
        <div className="container">
            <div className="card">
                <img src="https://pibig.info/uploads/posts/2021-06/1623123014_3-pibig_info-p-znachenie-vodi-v-prirode-priroda-krasivo-f-3.jpg" alt="image" />
                <div className="intro">
                <h1 className="text-h1">Short title here</h1>
                <p className="text-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum laudantium, ad deserunt quibusdam corrupti aut, recusandae alias dolores ex expedita quaerat a in et.
                </p>
                <button className="btn text-white border-white w-100 btn-style">Read more</button>
                </div>
            </div>     
        </div>
        </Wrap>
       
    );
}

export default CardSlideSpecial;