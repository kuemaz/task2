//import logo from './logo.svg';
import './App.css';
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Page1 from "./webApp/page1";
import Page2 from "./webApp/page2";
import Dashboard from "./webApp/dashboard";
import Nav from "./webApp/Nav";
import "./webApp/pages.css"
  

function App() {
  return (
    <>
    <Nav></Nav>
    <div className='containerHome'>
      {<Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />


      </Routes>}
    </div></>
      
      
  );
}

export default App;
//