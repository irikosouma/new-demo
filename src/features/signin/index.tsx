import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState, useLayoutEffect } from "react";

//styles
import {Wrap} from './index.styles';
import ModalComponent from "../../components/Modal";
import { account } from "../../axiosconfig";
import LoadingComponent from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountType from "../../type/AccountType";
import SubmitButton from "../../components/button/SubmitButton";
import Minion from "../../assets/image/Minion";


type Inputs = {
  user_email: string;
  password: string;
  retype_password: string;
  accept_term: boolean;
};

function Signin() {

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);


   const [accountList, setAccountList] = useState(Array<AccountType>);
   const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [pass, setPass] = useState(""); 

  const navigate = useNavigate()

  useLayoutEffect(() => {
    handleFetchData();
  }, []);



  const handleFetchData = () => {
    account.get("/account").then(({ data }) => {
      setAccountList(data);
    });
  };

  const handleSubmitForm = () => {
  const find_acc =  accountList.find((acc) => {
      return  acc.email === email;
    })

    if(find_acc) {
        if(find_acc.password === pass){
            navigate("/")
        } else {
           toast("Please enter your correct password")
        }
    } else {
      toast("Can not find your account");
      navigate("/register")

    }
  }
  const handleNavigate = () => {
    navigate("/register")
  }

  return (
    <Wrap>
      <div className="flex-content">
      <Minion className='image-login-block'/>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className=" my-5 mx-auto card-style"
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="text-headline">Stay in the Know!</h2>
                <p className="mb-5 campaigns">
                  Don't get left behind!
                </p>                
                <div className="mb-4 w-100 h-fit border-form">
                    <input
                      placeholder="Name"
                      type="Name"
                      className="form-control"
                      value={email}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 w-100 border-form">
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <select className="form-select border-form mb-4 custom-select" aria-label="Default select example">
                    <option selected>Country</option>
                    <option value={1}>Vietnam</option>
                    <option value={2}>Thailand</option>
                    <option value={3}>Korea</option>
                  </select>
                  <select className="form-select border-form mb-4 custom-select" aria-label="Default select example">
                    <option selected>Platform</option>
                    <option value={1}>iOS</option>
                    <option value={2}>Android</option>
                  </select>

                  <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                      <label className="form-check-label small-checkbox" htmlFor="flexCheckDefault">
                      By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.
                      </label>
                      {err && (
                      <span className="text-danger fs-small dp-flex ">
                        You must accept the terms
                      </span>
                    )}
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                      <label className="form-check-label small-checkbox" htmlFor="flexCheckDefault">
                      I agree to receive promotional offers relating to all Gameloft games and services.
                      </label>
                      {err && (
                      <span className="text-danger fs-small dp-flex ">
                        You must accept the terms
                      </span>
                    )}
                    </div>
                    <div className="signup__form-body-button">
                      <SubmitButton title="Button"/>
                  </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <ToastContainer />
      </MDBContainer>
      {loading && <LoadingComponent />}
      </div>
      
    </Wrap>
  );
}

export default Signin;
