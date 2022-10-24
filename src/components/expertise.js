
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
                                        <Card.Title>
                                            <h5>Refrigeration & Airconditioning</h5>
                                            <h6>Residential & Commercial Application</h6>
                                        </Card.Title>                                   
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>
                                            <h5>Precision Airconditioning Unit</h5>
                                            <h6>Data Center Application</h6>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <h5>Ventilation & Ducting Works</h5>
                                            <h6>Residential & Commercial Application</h6>
                                        </Card.Title>                                  
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Fire Protection & FDAS</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="services">
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <h5>Electrical Works</h5>
                                            <h6>Residential & Commercial Application</h6>
                                        </Card.Title>                                 
                                    </Card.Body>
                                </Card>
                                <Card className="p-2 card-services">
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <h5>Solar Powered System</h5>
                                            <h6>Irrigation & Commercial Application</h6>
                                        </Card.Title>  
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