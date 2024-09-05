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
                    <Route path={'/investicii-v-kriptovalyutu'} element={<Page1/>}/>
                    <Route path={'/investicii-v-platformy-tekhnologii-i-trendy'} element={<Page2/>}/>
                    <Route path={'/investicii-v-startapy'} element={<Page3/>}/>
                    <Route path={'/investicii-v-aktivy'} element={<Page4/>}/>
                    <Route path={'/cifrovye-investicii'} element={<Page5/>}/>
                    <Route path={'/nvesticii-v-tekhnologii'} element={<Page6/>}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
