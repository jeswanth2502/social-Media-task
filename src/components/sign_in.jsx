import React, {
  useState
} from "react";

function SignIn() {
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");
  var dummyCriteria = [false, false];
  var [userNameCriteria, setUserNameCriteria] = useState([false, false]);
  var [passwordCriteria, setPasswordCriteria] = useState([false, false]);
  var temp = "";

  function userNameInput(event) {
    temp = event.target.value;
    console.log(temp);
    if (temp === "") {
      dummyCriteria[0] = false;
    } else {
      dummyCriteria[0] = true;
      if (temp === "admin") {
        dummyCriteria[1] = true;
      } else {
        dummyCriteria[1] = false;
      }
      setUserNameCriteria(dummyCriteria);
      console.log(userNameCriteria);
    }
  }

  function passwordInput(event) {
    temp = event.target.value;
    if (temp === "") {
      dummyCriteria[0] = false;
    } else {
      dummyCriteria[0] = true;
      if (temp === "admin123") {
        dummyCriteria[1] = true;
      } else {
        dummyCriteria[1] = false;
      }
      setPasswordCriteria(dummyCriteria);
    }
  }
  return (<div className = "signIn col-3" >
      <div style = {
        {
          color: 'white',
          fontSize: 40,
          marginBottom: 70
        }
      }> Social Media </div> 
      <form className = 'col-12'
      style = {
        {
          textAlign: '-webkit-center'
        }
      }>
      <div className = 'col-9 signInCredentials'
      style = {
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }
      }>
      <input className = 'col-11 signInInput'
      onChange = {
        userNameInput
      }
      placeholder = "UserName: use admin" / > {
        userNameCriteria[0] == false ? <div className = 'signInError' > * User Name Cannot be Empty </div>:userNameCriteria[1]==false?<div className='signInError'>*User Name Incorrect</div> : <div> </div>} </div>

          <div className = 'col-9 signInCredentials'
        style = {
          {
            marginBottom: 70
          }
        }>
        <input className = 'col-11 signInInput'
        onChange = {
          passwordInput
        }
        placeholder = "Password: use admin123" / > {
          passwordCriteria[0] == false ? <div className = 'signInError' > * Password Cannot be Empty </div>:passwordCriteria[1]==false?<div className='signInError'>*Password Incorrect</div> : <div> </div>}

            </div> {
              userNameCriteria[0] && userNameCriteria[1] && passwordCriteria[0] && passwordCriteria[1] ?
                <a href = '/home'
              className = 'signInSubmit' > Log In </a>:<button className='signInSubmit'>Log In</button>
            } 
            </form> 
            </div>
        );
      }

      export default SignIn;
