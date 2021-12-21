import React from 'react';
import { Accordion, Container, Nav } from 'react-bootstrap';
import "./about.css"
const About = () => {
    return (
        <>
        {/* about page heading start */}

        <div className="aboutBackdround">
            <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}>Our Activities</span></h1>
        </div>

        {/* about page heading end */}

        <Container className="text-center">

            <div className="text-center pb-5">
                <h1 className="pt-5">MetroLab Consultancy</h1>

                <p className="mx-auto">Being closely associated with both doctors and patients for over two decades, I have heard of such comments often. Initially I used to be confused and later I started enquiring from the patients myself as to when did the problem start? What did the doctor prescribe? How many days did you follow his advice, etc? Food texture is defined as those properties of a food that are sensed by touch in the mouth and with the hands. We use many words to describe food texture—foods can be soft or hard, mushy or crunchy, or smooth or lumpy. Texture is important to the enjoyment and acceptability of foods. Would you enjoy a mushy apple or soggy toast?</p>
            </div>


            <div className="text-center pt-5">
                <h1>MetroLab & Our Dreams</h1>

                <p>Older adults with chewing and swallowing problems may not be able to safely eat foods with regular textures. They may need to eat only soft foods, or they may require that foods be cut up or ground/minced. Offering foods that normally have a texture that is easier to swallow, such as cooked cereal, pudding, and yogurt, may be recommended. Gravies and sauces may need to be added to foods to ensure that foods are moist enough to swallow. Some older adults with swallowing problems require a puréed diet—a diet where foods are blended to a smooth texture. When foods are ground or puréed, the taste of the food changes—liquids may be added during preparation, which may then dilute or mask the flavor of the food; gravies or sauces may be added to ensure the food is moist but may also change the flavor of the food. Microwave reheating can change the taste of the texture-modified food. Aroma, which is closely related to taste, may be decreased or altered during preparation as well.</p>

            </div>

        </Container>
        </>
    );
};

export default About;