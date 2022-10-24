import { Component } from "react";
import { Nav } from "react-bootstrap";

class Footer extends Component{
    render(){
        return(
            <>
                <Nav className="justify-content-center j-nav j-footer" >
                    <Nav className="justify-content-center">
                        <Nav.Link onClick={() => window.location = 'mailto:jfrozzengineering@gmail.com'}>jfrozzengineering@gmail.com</Nav.Link>
                        <Nav.Link eventkey="disabled" disabled>
                                044 324 3123 /
                                0921 859 3770
                        </Nav.Link>
                        <Nav.Link target="_blank" onClick={() => window.open('https://www.facebook.com/jfrozzengineers')}>
                            <img
                            src={require('../assets/images/fb-logo.png')}
                            width="40"
                            height="20"
                            className="d-inline-block align-top"
                            alt="J-frozz"
                            />
                        </Nav.Link> 
                    </Nav>
                    {/* <p className="text-center a-res">©2022</p> */}
                </Nav>
            </>
            
        )
    }
}

export default Footer;