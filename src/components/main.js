import { Component } from "react";
import { Container,Card, Stack } from "react-bootstrap";

class Main extends Component{
    render(){
        return(
            <>
                <Container className="about-img">
                    <Stack direction="horizontal" gap={3}>
                        <Card style={{ width: '40rem', height:'100%' }}>
                            <Card.Body className="text-center">
                                <Card.Title>ABOUT US</Card.Title>
                                <Card.Text className="about-info">
                                    The company has been formed by a group of
                                    professionals having vivid experience and wide
                                    exposure in Civil, Electrical & Mechanical
                                    Engineering. People involved here are qualified
                                    engineers and technicians from the renowned
                                    institutions.
                                    <br />
                                    <br />
                                    The resource personnel working in the company
                                    have been consistently providing reliable support
                                    services and maintenance work for clients
                                    nationwide. Bottom line of the company philosophy
                                    is building a long-term business partnership with its
                                    clients where interpersonal relationship, reliability
                                    and assured quality.
                                    <br />
                                    It is a company where professionals from both
                                    technical and functional field group join together
                                    with harmony. We want to establish ourselves as the
                                    best choice in civil & electro-mechanical
                                    services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  className="" style={{ width: '40rem', height:"340px"}}>
                            <Card.Body className="text-center">
                                <img
                                    style={{ width: '100%', height:'100%' }}
                                    className="d-block"
                                    src={require('../assets/images/cctv_1.jpg')}
                                    alt="Second slide"
                                />
                            </Card.Body>
                        </Card>
                    </Stack>
                </Container>
            </>
        );
    }
}
export default Main;