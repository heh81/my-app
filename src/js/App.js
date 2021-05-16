import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./components/Start";
import Memory from "./components/Memory";
import Dictation from "./components/Dictation";



// APP
const App = () => {

    // const [test, setTest] = useState(null)
    // const API = "data/db.json"

    // const testEwa = () => {
    //     // console.log("klik")
    //     fetch(API)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             }
    //             throw Error("Błąd!!!")
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setTest(data.results)
    //         })
    //         .catch(error => console.log(error));
    // }

    return (
        <BrowserRouter>

            <div className="App">

                <Header />
                <Switch>
                    <Route exact path="/start" component={Start} />
                    <Route exact path="/memory" component={Memory} />
                    <Route exact path="/dyktando" component={Dictation} />
                    {/* <Route path="/dyktando" component={() => <Dyktando aaa={test} bbb={testEwa} />} /> */}
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;