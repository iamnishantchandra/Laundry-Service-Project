

import { Switch,Route,BrowserRouter as Router} from "react-router-dom";


import Orders from './components/Orders';
import AddOrder from './components/addorder';
import PrivateRoute from './App/PrivateRoute';

function App() {
  return (
    <Router>
<Switch>
      <Route exact path='/' component={Orders} />
      
      
      <Route exact path='/orders' component={Orders} />
      </Switch>
    </Router>

  );
}

export default App;

