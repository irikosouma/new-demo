import styled from 'styled-components';
const Wrap = styled.div`
background-color: #EBF6FF;

.text-headline {
    font-weight: bold;
    color: #2699FB;
}
.fs-small {
    font-size: 0.8em;
}
.card-style {
    border-radius: 0;
    border: none;
    max-width: 400px;
    background-color: #EBF6FF;
}
.campaigns {
    color: #2699FB;
    font-weight: 500;
}
.email-container {
    display: flex;
    align-items: center;
    width: 100%;
}
.options {
    width: 320px;
    margin: 40px 25px;
}
.email-line {
    width: 100%;
    border: 1px solid #e7e7e9;
}
.dp-flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.wrap-input {
    width: 100%;
    height: 40px;
    border-radius: 6px;
}
.border-form {
    background-color:#2699FB!important;
    border: 1px solid #2699FB!important;
    border-radius: 6px!important;
}
.form-control::placeholder {
            color:  #2699FB;
            opacity: 1;
}
select { color: #2699FB; }
.custom-select {
    background: white url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='blue' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px !important;
  }
  .small-checkbox {
    font-size : 10px;
    color: #2699FB;
  }
  @media only screen and (max-width: 192px) and (min-width: 50px) {
    .image-login-block {
        display: none;
    }
    .border-form, .form-control {
        background-color:transparent!important;
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 193px) {
    .image-login-block {
        display: none;
    }
    .border-form, .form-control {
        background-color:transparent!important;
    }
  }
  @media only screen and (min-width: 993px) {
    .flex-content {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 980px;
        margin: 0 auto;
    }
    .image-login-block {
        display: block;
    }
    .border-form, .form-control {
        background-color:transparent!important;
    }
  }


`;
export {Wrap}