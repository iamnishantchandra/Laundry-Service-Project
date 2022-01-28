import './App.css';
import SignIn from './components/signIn';
import Register from './components/register';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/register' element={<Register/>}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;