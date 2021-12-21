import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({doctor}) => {
    const {name,img,Id} = doctor

    const history = useHistory()
    const viewDetails = () => {
      history.push(`/details/${Id}`)
    }

    return (
    <Col>
      <Card className="pb-3 text-center">
        <Card.Img style={{height:'170px',objectFit:'cover'}} variant="top" src={img} />
        <Card.Body className="bg-dark text-light">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          MBBS (DMC), FCPS (Medicine), MD (Internal Medicine), FACP (USA)
          Medicine Specialist
          Dhaka Medical College & Hospita
          </Card.Text>
          <Button variant="info" onClick={viewDetails} className="">Details</Button>
        </Card.Body>

      </Card>
    </Col>
    );
};

export default Doctor;