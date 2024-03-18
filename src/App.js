import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Example from './Components/Example/Example';
import Test from './Components/Test/Test';
import Api from './Components/Api/Api';
import Testdropdown from './Components/Testdropdown/Testdropdown';
import Test1 from './Components/Test1/Test1';
import Mainpage from './Components/Main page/Mainpage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={< Register />} />
    <Route path='login' element={< Login />} />
    <Route path='example' element={< Example />} />
    <Route path='test' element={< Test />} />
    <Route path='api' element={< Api />} />
    <Route path='testdropdown' element={< Testdropdown />} />
    <Route path='test1' element={< Test1 />} />
    <Route path='mainpage' element={< Mainpage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
