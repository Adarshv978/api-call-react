import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn';
import Login from './Components/Login/Login';
import Protected from './Components/Protected';
import LogOut from './Components/Login/LogOut';
import Public from './Components/Public';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
       
          <Route element={<Protected />}>
           
            
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            {/* <Route path='/contact' element={<Contact />}></Route> */}
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/logout' element={<LogOut />}></Route>
          </Route>
          <Route element={<Public />}>
      
            <Route path='/sigin' element={<SignIn />}></Route>
            <Route path='/login' element={<Login />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <Home/> */}

    </div>
  );
}

export default App;
