import logo from './logo.svg';
import './CSS/App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Ccm from './pages/Ccm';
import Typing from './pages/Typing';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ccm' element={<Ccm/>}/>
      <Route path='/typing' element={<Typing/>}/>
    </Routes>
    </div>
  );
}

export default App;
