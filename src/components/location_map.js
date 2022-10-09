import React from 'react';
import { Container,Card } from 'react-bootstrap';
 const AddressMap=()=>{
    return (
        <Container>
            <div className="row justify-content-center">
                <Card style={{ width: '800px' }}>
                    <Card.Body className="text-center">
                        <Card.Title>Location</Card.Title>
                            <iframe 
                                src="https://maps.google.com/maps?q=j-frozz&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                width={750} 
                                height={450}
                                frameborder="0" 
                                style={{border:0}} 
                                allowfullscreen="" 
                                aria-hidden="false" 
                                tabindex="0"
                                title='J-Frozz-Map'
                            >
                            </iframe>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
 }
 export default AddressMap