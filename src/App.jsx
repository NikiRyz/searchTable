import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Table from "./components/Table";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Table}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
