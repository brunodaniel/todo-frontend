import './App.css';
import Header from './components/shared/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Edit from './pages/Edit/Edit';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
   <div>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/cadastro" element={<Cadastro/>}/>
     <Route path="/edit" element={<Edit/>}/>
     </Routes>
     
   </div>
  );
}

export default App;
