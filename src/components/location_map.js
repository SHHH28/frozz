import React from 'react';
import { Container,Card } from 'react-bootstrap';
 const AddressMap=()=>{
    return (
        <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="text-center">
                        <Card.Title>Location</Card.Title>
                            <iframe 
                                src="https://maps.google.com/maps?q=j-frozz&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                className='mapa-ti-jfrozz'
                                frameborder="0" 
                                allowfullscreen="" 
                                aria-hidden="false" 
                                tabindex="0"
                                title='J-Frozz-Map'
                            >
                            </iframe>
                    </Card.Body>
                </Card>
        </Container>
    );
 }
 export default AddressMap