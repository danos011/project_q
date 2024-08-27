import './css/App.css';
import {NextUIProvider} from "@nextui-org/system";
import {Landing} from "./Components/LandingPage/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page1} from "./Components/KnowledgeBase/pages/Page1";
import {Page2} from "./Components/KnowledgeBase/pages/Page2";
import {Page3} from "./Components/KnowledgeBase/pages/Page3";
import {Page4} from "./Components/KnowledgeBase/pages/Page4";
import {Page5} from "./Components/KnowledgeBase/pages/Page5";
import {Page6} from "./Components/KnowledgeBase/pages/Page6";


function App() {

    return (
        <NextUIProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'1'} element={<Page1/>}/>
                    <Route path={'2'} element={<Page2/>}/>
                    <Route path={'3'} element={<Page3/>}/>
                    <Route path={'4'} element={<Page4/>}/>
                    <Route path={'5'} element={<Page5/>}/>
                    <Route path={'6'} element={<Page6/>}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
