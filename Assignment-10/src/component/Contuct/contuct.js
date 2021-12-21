import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './contuct.css'
const Contuct = () => {
    return (
        <>
        {/* about page heading start */}

        <div className="aboutackdround">
            <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}>Contact Information</span></h1>
        </div>

        {/* about page heading end */}

        <Container className="text-center">
            <div className="row py-5">
            
            <div className="col-12 col-md-6">
                <div className="text-center">
                    <img className="w-100" src="https://st.depositphotos.com/1010613/3037/i/600/depositphotos_30374677-stock-photo-group-of-happy-multiracial-doctors.jpg" alt="" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="text-center">
                    <h1>Keep Connect With Us</h1>

                    <p>Good health means soundness of body and mind. It keeps one fit and free from diseases. If anyone observes certain rules, he/she can keep good health. If we want to maintain good health, we have to take a balanced diet, drink pure water, take regular exercise and rest, etc. We also need to observe the rules of cleanliness. As most of the people in our country live below the poverty level, they do not get the food they need for maintaining good health. Even the rich and educated people are not conscious of the rules of good health.</p>
                </div>
            </div>
            </div>

            <div className="w-75 mx-auto text-start py-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check Out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </Container>
        </>
    );
};

export default Contuct;