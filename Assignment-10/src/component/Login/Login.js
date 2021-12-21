import { Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {handleGoogleSign,error,loggIn,setError} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn = () =>{
        handleGoogleSign()
        .then(result =>{
           history.push(redirect_url);
        })
        .catch(error => {
            setError(error.message)
        });
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
    };
    const handlePass = e =>{
        setPassword(e.target.value);
    };
    const handleLogin = () =>{
        loggIn(email,password);
    }
    return (
        <Container>
            <div className="w-100 mx-auto">
            <div>
                <img className="w-50 mx-auto" src="https://ardenthealth.com/sites/default/files/portfolio/Lovelace%20Womens%2003.jpg" alt="" />
            </div>
            <div className="py-5">
                <div className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share this email with anyone.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                    <p>{error}</p>
                    <button onClick={handleLogin} className="bg-dark rounded text-light py-2 px-3 border-0">Login</button> <br />
                    <Button onClick={handleGoogleLogIn} variant="warning mt-2">Google Sign In</Button>
                    <Link to="/sign">Are you new user?</Link>
                    <p>{error}</p>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Login;