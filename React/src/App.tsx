import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/footer/Footer';
import Navbar from './Components/nav/Nav'; 
import Home from './Pages/home/Home';
import Cadastrar from './Components/form/formCadastro/Cadastrar';
import Login from './Components/form/formLogin/Login';
import Postagens from './Pages/postagem/Postagens';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrar' element={<Cadastrar />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/postagem' element={<Postagens />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
