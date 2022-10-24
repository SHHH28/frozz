
import { Component } from "react";
import { Container,Card, Stack } from "react-bootstrap";

class Expertise extends Component{
    render(){
        return(
            <>
                <Container>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title>Area of Expertise</Card.Title>                          
                            <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>Civil and Structural Design and Installation</Card.Title>                                   
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>PACU Design and Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>FDAS Design and Installation</Card.Title>                                   
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Plumbing Design and Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>Ducting Works</Card.Title>                                  
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>Solar Electrical Power System</Card.Title>
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
export default Expertise;