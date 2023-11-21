import React from 'react';
//style
import { Wrap } from './index.styles';
//images
import Microsoft from '../../assets/image/brands/Microsoft';

function DownLoad() {
    return (
        <Wrap>
          <div className="content container">
            <p className='text-download'>Download lastest version</p>
            <div className="text-center">
            <div className="custom-grid">
              <Microsoft />
              <Microsoft />
              <Microsoft />
              </div>
            </div>
          </div>         
        </Wrap>
    );
}

export default DownLoad;
