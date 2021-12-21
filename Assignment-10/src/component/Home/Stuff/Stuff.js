import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="py-3" style={{fontSize:"4rem",textAlign:'center'}}>We Are Working Togather</h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start">
                            <h1>We Are Working Careful</h1>
                            <p>You may call them simply doctors. But most doctors have extra expertise in one type of medicine or another. In fact, there are several hundred medical specialties and subspecialties. Here are the most common types of doctors you'll likely see.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What Is Our Speciality?</Accordion.Header>
                            <Accordion.Body>
                            We care for people who are critically ill or injured, often heading intensive care units in hospitals. You might see them if your heart or other organs are failing or if you’ve been in an accident.The doctors care for the elderly. They can treat people in their homes, doctors' offices, nursing homes, assisted-living centers, and hospitals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why you need to choose us?</Accordion.Header>
                            <Accordion.Body>
                            These primary-care doctors treat both common and complex illnesses, usually only in adults. You’ll likely visit them or your family doctor first for any condition. Internists often have advanced training in a host of subspecialties, like heart disease, cancer, or adolescent or sleep medicine. With additional training (called a fellowship), internists can specialize in cardiology, gastroenterology, endocrinology, nephrology, pulmonology, and other medical sub-specialties.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;