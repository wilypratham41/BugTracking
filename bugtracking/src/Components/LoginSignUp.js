import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';



function LoginSignUp() {

const [OpenLoginModal,SetLoginModal] = useState(false);
const [username,Setusername] = useState();
const [password,Setpassword] = useState();


const [OpenSignUpModal,SetSignupModal] = useState(false);
const [Name,SetName] = useState();
const [Email,SetEmail] = useState();



function LoginHandler(){
    SetLoginModal(true);
}
function CloseLoginHandler(){
    SetLoginModal(false);
}

async function LoginByUser() {
  console.log(`Entered Username: ${username}, Password: ${password}`);
  
  const Credentials = {
      username: username,
      password: password,
  };

  alert("Credentials: " + JSON.stringify(Credentials));

  try {
      const response = await axios.post('http://localhost:8089/JWT/login', Credentials);

      if (response.data === "Successful") {
          alert("Login Successful!");
         
      } else {
          alert("Login Failed!");
      }

      Setusername('');
      Setpassword('');
      SetLoginModal(false);


  } catch (error) {
      console.error("Error occurred while Login:", error);
  }
}

function SignupHandler(){
  SetSignupModal(true);
}
function CloseSignUpHander(){
  SetSignupModal(false);
}
async function SignipByUser(){  
  console.log("these details are entered by user"+username+ password+Name+Email);

  const inputs = {
    username: username,
    password: password,
    name: Name,
    email: Email
};

alert("Credentials: " + JSON.stringify(inputs));

try {
    const response = await axios.post('http://localhost:8089/JWT/SignUp', inputs);

    if (response.data === "Successful") {
        alert("Login Successful!");
       
    } else {
        alert("Login Failed!");
    }

    Setusername('');
    Setpassword('');
    SetName('');
    SetEmail('');
    SetSignupModal(false);


} catch (error) {
    console.error("Error occurred while Login:", error);
}

}


  return (
    <div>
        
    <h1>LoginSignUp</h1>

    <button onClick={LoginHandler}>Login</button>
    <button onClick={SignupHandler}>Signup</button>


    {/* Login Modal */}
    <Modal
        open={OpenLoginModal}
        onClose={CloseLoginHandler}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          outline: 'none'
        }}>
            {/* <button  variant="outlined" style={{}}> */}
            <i className="bi bi-x-circle" onClick={CloseLoginHandler}></i>
            {/* </button> */}
                <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
                  <h2>Login</h2>
                    
                    
                    <input  className="input" type='text' placeholder='Username' value={username} onChange={((e)=>{Setusername(e.target.value)})}></input>
                    
                    <input  className="input"type='password' placeholder='Password' value={password} onChange={((e)=>{Setpassword(e.target.value)})}></input>

                    {/* <button type="button" class="btn btn-primary" >Login</button> */}
                    <button type="button" className="btn btn-primary"onClick={LoginByUser} style={{width:'270px'}}>Login</button>

                </div>
        </div>
      </Modal>



      {/* SignupModal */}

      <Modal
        open={OpenSignUpModal}
        onClose={CloseSignUpHander}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          outline: 'none'
        }}>
            <button onClick={CloseSignUpHander} variant="outlined" style={{}}>
            <i className="bi bi-x-circle"></i>
            </button>
                <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <h2>Signup</h2>

                    <label>Name</label>
                    <input type='text' placeholder='enter Name'onChange={((e)=>{SetName(e.target.value)})}></input>

                    <label>Username</label>
                    <input type='text' placeholder='enter Usernmae' onChange={((e)=>{Setusername(e.target.value)})}></input>

                    <label>password</label>
                    <input type='password' placeholder='enter Password' onChange={((e)=>{Setpassword(e.target.value)})}></input>

                    <label>Email</label>
                    <input type='email' placeholder='user@gmail.com' onChange={((e)=>{SetEmail(e.target.value)})}></input>

                    <button onClick={SignipByUser}>Signup</button>
                </div>
        </div>
      </Modal>
    
    </div>
  )
}

export default LoginSignUp