import React from 'react';
//style
import { Wrap } from './index.styles';

function SubmitButton(props: any) {
    return (
        <Wrap>
            <div className='submit-button'>
                <button>{props.title}</button>
            </div>
        </Wrap>
        
    );
}

export default SubmitButton;