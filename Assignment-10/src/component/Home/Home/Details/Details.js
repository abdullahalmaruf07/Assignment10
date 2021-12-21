import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const [docDetails,setDocDetails] = useState([])
    const {Id} = useParams()
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDocDetails(data.find(x=> x.Id === +Id)))
    },[])
    return (
        <Container className="py-5 my-5">
            <div className="row">
                
                <div className="col-md-8 text-start">
                    <h3>{docDetails?.name}</h3>
                    <p>Health is wealth and everyone wants to have a good health condition. If you don’t have good health you won’t be able to focus on your studies or work. So you better focus on your health first. Otherwise, your study or work could get ruined. There are lots of rules that you have to follow to have good health. Let’s take a look at a few rules. First of all, you need to be aware of your food. What you are eating can make a big difference in your health.We shouldn’t eat food that comes in a box. Try to eat food these come from plants. Medication could be a good way to keep your body fit. Good sleep is important for better mental and physical health. Drinking at least seven glass of water is important for a normal human. Don’t skip your breakfast. Get up early in the morning and eat breakfast regularly.</p>
                    <p>Phone {docDetails?.call}</p>
                    <p>Patient Time : {docDetails?.time}</p>
                </div>
                <div className="col-md-4">
                    <img src={docDetails.img} alt="" className="w-100" />
                </div>
            </div>
        </Container>
    );
};

export default Details;