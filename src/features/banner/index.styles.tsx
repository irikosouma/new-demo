import styled from 'styled-components';
const Wrap = styled.div`
    background-color: #2699FB; 
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .large-title {
      font-size: 45px;
      font-weight: bold;
    }
    .small-title {
      font-size: 11px;
    }
    .description {
      font-size: 12px;
      font-weight: normal;
    }

    
    @media only screen and (max-width: 192px) and (min-width: 50px) {
      .wrap-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      } 
      .icon-images {
        width: 150px;
        object-fit: cover;
    }
    .flex-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    } 
    .content-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}

    @media only screen and (max-width: 992px) and (min-width: 193px) {
        .wrap-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        } 
        .icon-images {
          width: 150px;
          object-fit: cover;
      }
      .flex-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      } 
      .content-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 993px) {
      .icon-images {
        width: fit-content;
        object-fit: cover;
        position: absolute;
        right: 0;
        bottom: 10%;  
    }
        .wrap-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        } 
        .large-title, .description {
          width: 410px;
          text-align: justify;
         
        }
        .flex-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          max-width: 980px;
        }
    }


`;

export {Wrap}