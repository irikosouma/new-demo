import React from 'react';
import PropTypes from 'prop-types';
import SlideLive from '../../components/slide/SlideLive';
import { Wrap } from './index.styles';
import SearchIcon from '../../assets/image/SearchIcon';
import FacebookIcon from '../../assets/image/logo/Facebook';
import Instagram from '../../assets/image/logo/Instagram';
import Twitter from '../../assets/image/logo/Twitter';
import SlideFull from '../../components/slide/SlideFullView';



Contact.propTypes = {

};

function Contact(props: any) {
    return (
        <Wrap>
            <div className="contact">
                <div className="contact__title">
                    <h3 className='big__title'>game community hub</h3>
                </div>

                <div className="sub__title">
                    Live Game Updates
                </div>

                <div className="contact__live-avt">
                    <SlideLive />
                </div>

                <div className="contact_menu">
                    <div className="contact__menu__title">
                        <h4 className="contact__menu__title">All posts</h4>
                        <div className="contact__menu__left-icons">
                            <Twitter />
                            <Instagram />
                            <FacebookIcon />
                        </div>
                    </div>
                    <div className="contact__menu__right">
                        <div className="contact__menu__right-icons">
                            <Twitter />
                            <Instagram />
                            <FacebookIcon />

                        </div>
                        <div className="contact__menu__fluid">
                            <div className="contact__menu-search">
                                <input type="text" placeholder='Search' />
                                <SearchIcon />
                            </div>
                         </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="contact__slide-card">
                <SlideFull/>
            </div>
        </Wrap>
    );
}

export default Contact;