import { Component } from "react";
import { Container,Card, Stack } from "react-bootstrap";
import JAircon from "./aircondition";
import Jcctv from "./cctv";
import JMaintenance from "./maintenance"


class Services extends Component{
    render(){
        return(
            <>
                <Container>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Our Services</Card.Title>                          
                            <Stack direction="horizontal" gap={3}>
                                <Card style={{ width: '30rem' }} className="p-2">
                                    <Card.Body className="text-center">
                                        <Card.Title>Refrigeration and Air-Conditioning</Card.Title>
                                    </Card.Body>
                                    <JAircon />
                                </Card>
                                <Card style={{ width: '30rem' }} className="p-2">
                                    <Card.Body  className="text-center">
                                        <Card.Title>CCTV Installation</Card.Title>
                                    </Card.Body>
                                    <Jcctv />
                                </Card>
                                <Card style={{ width: '30rem' }} className="p-2">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Maintenance Services</Card.Title>               
                                    </Card.Body>
                                    <JMaintenance />
                                </Card>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body className="text-center">
                                        <Card.Title>Electrical Design and Installation (UPS)</Card.Title>                                  
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Mechanical Design and Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body className="text-center">
                                        <Card.Title>Civil and Structural Design and Installation</Card.Title>                                   
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body  className="text-center">
                                        <Card.Title>PACU Design and Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body className="text-center">
                                        <Card.Title>FDAS Design and Installation</Card.Title>                                   
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body  className="text-center">
                                        <Card.Title>Plumbing Design and Installation</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Card style={{ width: '40rem' }} className="p-2">
                                    <Card.Body className="text-center">
                                        <Card.Title>Ducting Works</Card.Title>                                  
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '40rem' }} className="p-2">
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
export default Services;