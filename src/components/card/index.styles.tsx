import styled from 'styled-components';
const Wrap = styled.div` 
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
    .container {
      display: flex;
      gap: 40px;
    }
    
    .card {
      position: relative;
      height: 500px;
      box-shadow: 5px 5px 20px;
      overflow: hidden;
      cursor: pointer;
    }
    
    .intro {
      position: absolute;
      height: 80px;
      width: 350px;
      bottom: 0;
      overflow: hidden;
      padding: 10px;
      color: #fff;
      background-color: rgba(27, 27, 27, .5);
      transition: .4s ease-in-out;
    }
    
    .card:hover .intro {
      height: 280px;
      bottom: 0;
      background-color: #000;
    }
    
    .card:hover .text-p {
      opacity: 1;
      visibility: visible;
    }
    
    .card:hover img {
      transform: scale(1.1) rotate(-3deg);
    }
    
    img {
      height: 500px;
      width: 350px;
      object-fit: cover;
      border-radius: 4px;
      transition: transform .4s ease-in-out;
    }
    
    .text-h1 {
      margin: 10px;
      text-transform: uppercase;
      font-size: 28px;
    }
    
    .text-p {
      font-size: 16px;
      padding: 10px;
      visibility: hidden;
      opacity: 0;
    }
    .wrap-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }
    .btn-style {
      background-color: black;
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
          text-align: justify;
        }
        .flex-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          max-width: 980px;
        }
        .container {

          display: flex;
          gap: 40px;
        }
        
        .card {
          position: relative;
          height: 500px;
          box-shadow: 5px 5px 20px;
          overflow: hidden;
        
          cursor: pointer;
        }
        .wrap-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width:100%;
          height:100%;
        }
        .intro {
          position: absolute;
          height: 80px;
          width: 350px;
          bottom: 0;
          overflow: hidden;
        
        
          padding: 10px;
          color: #fff;
          background-color: rgba(27, 27, 27, .5);
        
          transition: .4s ease-in-out;
        }
        
        .card:hover .intro {
          height: 100%;
          bottom: 0;
          background-color: transparent;
        }
        
        .card:hover .text-p {
          opacity: 1;
          visibility: visible;
        }
        
        .card:hover img {
          transform: scale(1.1) rotate(-3deg);
        }
        
        img {
          height: 500px;
          width: 350px;
          object-fit: cover;
          border-radius: 4px;
          transition: transform .4s ease-in-out;
        }
        
        .text-h1 {
          margin: 10px;
          text-transform: uppercase;
          font-size: 28px;
        }
        
        .text-p {
          font-size: 16px;
          padding: 10px;
          visibility: hidden;
          opacity: 0;
        }
        .btn-style {
          background-color: black;
          opacity: 0.5;
          text-transform: uppercase;
        }
    }
`;

export {Wrap}