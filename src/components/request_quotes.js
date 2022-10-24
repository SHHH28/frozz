import { Component } from "react";
import { Container, Image, Button } from "react-bootstrap";


class RequestQuotes extends Component{
    render(){
        return (
            <Container className="asp45">
                <Image 
                  src={require('../assets/images/asp45.jpg')}>
                </Image>
                <div className="asp46">
                    <p>Awan Pay tagline mweheheh</p>
                </div>
                <Button className="rqst404">Request Quote</Button>
            </Container>
        );
    }
}
export default RequestQuotes;