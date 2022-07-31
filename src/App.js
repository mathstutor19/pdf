import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home/Home";
import Desktop from "./routes/Desktop/Destktop";

// import components

// import pages

import Merge from "./routes/Merge/Merge";
import Split from "./routes/Split/Split";
import Mobile from "./routes/Mobile/Mobile";
import Faq from "./routes/Faq/Faq";
import Tool from "./routes/Tool/Tools";
import Compress from "./routes/Compress/Compress";
import Legal from "./routes/Legal/Legal";
import Story from "./routes/Story/Story";
import Contact from "./routes/Contact/Contact";
import Education from "./routes/Education/Education";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Pricing from "./routes/Pricing/Pricing";
import Business from "./routes/Business/Business";

function App() {
    return (
        <div>
                <BrowserRouter>
                    <Navbar />
              

                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/merge" element={<Merge />} />
                        <Route path="/split" element={<Split />} />
                        <Route path="/compress" element={<Compress />} />
                        <Route path="/mobile" element={<Mobile />} />
                       <Route path='/desktop' element={<Desktop/>}></Route>
                       <Route path='/faq' element={<Faq/>}></Route>
                       <Route path='/tool' element={<Tool/>}></Route>
                       <Route path='/legal' element={<Legal/>}></Route>
                       <Route path='/story' element={<Story/>}></Route>
                       <Route path='/contact' element={<Contact/>}></Route>
                       <Route path='/education' element={<Education/>}></Route>
                       <Route path='/login' element={<Login/>}></Route>
                       <Route path='/register' element={<Register/>}></Route>
                       <Route path='/pricing' element={<Pricing/>}></Route>
                       <Route path='/business' element={<Business/>}></Route>
                 
                       
                    </Routes>
                 
                </BrowserRouter>
        </div>
    );
}

export default App;
