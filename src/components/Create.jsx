import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';


export default function Create() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
       
        // console.log(firstName);
        // console.log(lastName);
        // console.log(checkbox);
        localStorage.setItem("first name", firstName);
        localStorage.setItem("last name", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("checkboxe", checkbox);
        addToast('Saved Successfully', { appearance: 'success' });
    }

    const cleardata = () => {   
         localStorage.clear();
        alert('called');
    }

    return (
        <div  class= "main">
             <center><h1>Register</h1></center>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Enther the email' onChange={(e) => setemail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input  type='password' placeholder='Enter the password' onChange={(e) => setpassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Signup</Button>
                <Link to="/login"><Button>Login in</Button></Link>
                <a onClick={cleardata} type='submit'>clear</a>

            </Form>
        </div>
    )
}