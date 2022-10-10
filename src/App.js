import React from "react";
import {Container,Navbar,Nav} from 'react-bootstrap'; 
import AddressMap from "./components/location_map";
import Main from "./components/main";
import Services from "./components/services";
class App extends React.Component {
    render() {
        return (
            <>
                <Navbar sticky="top" variant="dark" className="mb-3 j-nav">
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={require('./assets/images/logo.png')}
                                className="d-inline-block align-top logo"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav>
                                <Nav.Link onClick={() => window.location = 'mailto:jfrozzengineering@gmail.com'}>jfrozzengineering@gmail.com</Nav.Link>
                                <Nav.Link>
                                        044 324 3123 /
                                        0921 859 3770
                                </Nav.Link>
                                <Nav.Link target="_blank" onClick={() => window.open('https://www.facebook.com/jfrozzengineers')}>
                                    <img
                                    src={require('./assets/images/fb-logo.png')}
                                    width="40"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Main />
                    <br/>
                <Services />
                    <br />
                <AddressMap />
            </>
        );
    }
};
export default App;