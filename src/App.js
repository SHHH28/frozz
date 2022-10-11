import React from "react";

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
export default App;