import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 style={{fontSize:"4rem"}} className=" pb-3 text-center">Our Goal in Future</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://www.postdicom.com/Images/BlogPosts/SocialMediaImages/medical-imaging-science-and-applications-social.jpg" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <h2>Preventive Medicine Specialists</h2>
                        <p>They focus on keeping you well. They may work in public health or at hospitals. Some focus on treating people with addictions, illnesses from exposure to drugs, chemicals, and poisons, and other areas. They may work in public health or at hospitals. Some focus on treating people with addictions, illnesses from exposure to drugs, chemicals, and poisons, and other areas.</p>
                        <Button variant="info">Read more</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Branch;