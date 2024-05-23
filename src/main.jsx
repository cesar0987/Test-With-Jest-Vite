import React from "react";
import ReactDOM from "react-dom/client";
import {CounterApp} from "./CounterApp";
import FirstApp from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <CounterApp value={123}/> */}
        <FirstApp title={'Fernando'} subTitle={"Tilleria"} name={'Cesar Fernando'}/>
    </React.StrictMode>
);