import Homepage from "./homepage/Homepage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./authentication/AuthPage.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<AuthPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
