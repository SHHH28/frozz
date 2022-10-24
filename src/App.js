import React, { useEffect, useState } from "react";
import Expertise from "./components/expertise";
import Footer from "./components/footer";

import SpinnerLoad from "./components/loading-spin";
import AddressMap from "./components/location_map";
import Main from "./components/main";
import Header from "./components/navigation-bar";
import RequestQuotes from "./components/request_quotes";
import Services from "./components/services";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <RequestQuotes />   
                    <br/>
                <Services />
                    <br />
                <Expertise />
                    <br />
                <AddressMap />
                    <br />
                <Main />
                    <br />
                <Footer />
            </>
        );
    }
};
export default function JFrozz(){
    const [loading, setLoading]  = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    }, []);

    return(
        loading ?
           <SpinnerLoad /> 
        :
            <App />
    );
}