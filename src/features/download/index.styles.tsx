import styled from 'styled-components';
const Wrap = styled.div`
    background-color: #D8EDFF; 
    .icon-images {
      width: 150px;
      object-fit: cover;
    }
  .text-download {
    font-size: 25px; 
    color: #2699FB;
    font-weight: bold;
  }
 
    @media only screen and (max-width: 192px) and (min-width: 50px) {
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 20px 0;
      }
      
      .custom-grid {
        width: 337px;
        display: grid;
        grid-gap: 10px 5px;
        grid-template-columns: repeat(auto-fill, minmax(165px,1fr)); 
      }
}

    @media only screen and (max-width: 992px) and (min-width: 193px) {
     
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 20px 0;
      }
      .custom-grid {
        width: 337px;
        display: grid;
        grid-gap: 10px 5px;
        grid-template-columns: repeat(auto-fill, minmax(165px,1fr)); 
      }
    }
    @media only screen and (min-width: 993px) {
     
      .custom-grid {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 20px;
      }
      .content {
        max-width: 980px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 20px 0;
      }
    }


`;

export {Wrap}
