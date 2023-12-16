import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Popular from "./Components/Popular";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Popular></Popular>
            </div>
        </BrowserRouter>
    );
}

export default App;
