import React, { useEffect, useState } from "react";

import SpinnerLoad from "./components/loading-spin";
import AddressMap from "./components/location_map";
import Main from "./components/main";
import Header from "./components/navigation-bar";
import Services from "./components/services";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                    <br/>
                <Services />
                    <br />
                <AddressMap />
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