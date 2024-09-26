import React from "react";

import {Brand,Feature,CTA, Navbar} from "./components";
import {Footer,Header,Blog,WhatGBT3,Possibility,Features} from "./containers"
import "./App.css"

const App=() =>{
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />

            </div>
            <Brand />
            <WhatGBT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        
        </div>
    )
}
export default App;