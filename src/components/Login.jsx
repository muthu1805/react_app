import { letterSpacing } from '@mui/system';
import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
  
export default function Login() {
      const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let chackemail = useState( localStorage.getItem('email'));
    let checkpassword = useState(localStorage.getItem('password'));
        //  console.log(chackemail);
        //  console.log(checkpassword);
        // console.log(email,password);
         const loginsubmit = () => {
               
              if(email === chackemail[0] && password === checkpassword[0])
              {
                alert('login successfully');
                  navigate("/dashboard");
              }
              else{
                alert('authentcation failed');
                toast.success('Success Notification !', {
                    position: toast.POSITION.TOP_RIGHT
                });
              }
        }
        
    return (
        <div class= "main">
            <center><h1>Login</h1></center>
            <Form className="create-form">
                <Form.Field>
                    <label>email</label>
                    <input placeholder='enther the email' onChange={(e) => setemail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>password</label>
                    <input type="password" placeholder='enther the password' onChange={(e) => setpassword(e.target.value)}/>
                </Form.Field>
                <center>
                <Button onClick={loginsubmit} type='submit'>Login</Button>
                <Link to="/create"><Button>Sign up</Button></Link>
                </center>
            </Form>
        </div>
    )
}