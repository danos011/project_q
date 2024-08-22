import './css/App.css';
import {NextUIProvider} from "@nextui-org/system";
import {Landing} from "./Components/LandingPage/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Admin} from "./Components/AdminPage/Admin";


function App() {

    return (
        <NextUIProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'/Admin'} element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
