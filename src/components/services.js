import { Component } from "react";
import { Container,Card, Stack } from "react-bootstrap";

class Services extends Component{
    render(){
        return(
            <>
                <Container>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title>Our Services</Card.Title>                          
                            <Stack direction="horizontal" gap={3} className="services">
                                <Card  className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>Design</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Supply & Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Troubleshooting & Repair</Card.Title>               
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Cleaning & Preventive Maintenance</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    }
}
export default Services;