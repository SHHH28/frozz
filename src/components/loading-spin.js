import { Component } from "react";
import { Spinner } from "react-bootstrap";

class SpinnerLoad extends Component{
    render(){
        return(
            <>
                <div className="container-spinner">
                    <div className="vertical-center">   
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="light" />
                        <Spinner animation="grow" variant="dark" />
                    </div>
                </div>
            </>
        )
    }
}
export default SpinnerLoad;