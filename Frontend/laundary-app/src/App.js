import './App.css';
import SignIn from './components/signIn';
import Register from './components/register';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<SignIn/>}></Route>
          <Route exact path='/signup' element={<Register/>}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;