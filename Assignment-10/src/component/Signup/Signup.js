import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const {signUpp,handleName,handleEmail,handlePass,error,setError} = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegister=() =>{
        signUpp(email,password);
    }

    return (
        <Container>
            <div className="w-50 mx-auto">
            <div>
                <img src='https://i.gifer.com/IPHv.gif' alt="" />
            </div>
            <div className="py-5">
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button  onClick={handleRegister} variant="info" type="button">
                        Sign Up
                    </Button>

                    {/* <Button  onClick={handleAndRedirect} variant="dark" type="button">
                        Sign Up With Google
                    </Button> */}
                    <p>{error}</p>
                    <Link to="/log">Already registered?</Link>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Signup;