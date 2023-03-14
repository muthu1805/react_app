import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Nav from '../components/Nav';

export default function Navbar() {
    let fname = useState( localStorage.getItem('first name'));
    let lname = useState( localStorage.getItem('last name'));
    return (
        <div >
           <Nav/> 
          Welcome {fname}
        </div>
    )
}