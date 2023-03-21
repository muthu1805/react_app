import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main">
      <center>welcome hello react</center>
      <div>
        <Link to="/create">
          <Button>Sign up</Button>
        </Link>
        <Link to="/login">
          <Button>Login in</Button>
        </Link>
      </div>
    </div>
  );
}
