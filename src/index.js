import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { GlobleContextProvider } from "./Context/globle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <GlobleContextProvider>
            <App />
        </GlobleContextProvider>
    </React.StrictMode>
);
