import Homepage from "./homepage/Homepage.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Homepage/>
            </BrowserRouter>
        </>
    )
}

export default App
