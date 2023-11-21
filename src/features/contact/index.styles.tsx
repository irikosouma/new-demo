


import styled from 'styled-components';
const Wrap = styled.div`
   
.big__title {
  font-size: 25px;
  text-transform:capitalize;
  color: #2699FB;
}

@media only screen and (max-width: 192px) and (min-width: 50px) {
  .sub__title {
    display: none!important;
}
.contact {
  margin: 20px 0;
}

.contact__live-avt {
    margin-top: 21.4px;
}
.big__title {
  font-size: 25px;
  text-transform:capitalize;
  color: #2699FB;
}
}

@media only screen and (max-width: 992px) and (min-width: 193px) {
  .sub__title {
      display: none!important;
  }
  .contact {
    margin: 20px 0;
  }
  .contact__live-avt {
      margin-top: 21.4px;
  }
  .big__title {
    padding: 0 20px;
    font-size: 25px;
    text-transform:capitalize;
    color: #2699FB;
  }
  .contact_menu{
   display: flex;
   align-items: center;
   justify-content: space-between; 
  }
  .contact__menu__title {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20px);
}
  .contact__menu__fluid {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact__menu-search {
    width: calc(100% - 40px);
  }
  .contact__menu__left-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    :nth-child(2) {
      margin-left: 10px;
    }
    :nth-child(3) {
      margin-left: 10px;
    }
    
  }
  .contact__menu__right-icons {
    display: none!important;
    
  }
  .contact__menu__right {
    width: 100%;
  }
}

    @media only screen and (min-width: 993px) {
      .big__title {
        font-size: 45px;
        text-transform: uppercase;
        color: #2699FB;
        font-weight: bold;
      }
      .contact {
        width: 980px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin: 0 auto;
        padding: 20px 0;
      }
      .contact .contact_menu {
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .contact .contact__live-avt {
        margin-top: 30px;
      }
      .contact__slide-card {
        margin-top: 30px;
      }
      .sub__title {
        display: block;
        color: #2699FB;
      }

    }


`;

export {Wrap}
