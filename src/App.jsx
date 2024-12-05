import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';

function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/order" exact>
        <Order/>
      </Route>
      <Route path="/success" exact>
        <Success/>
      </Route>
    </Switch>
  )
}

export default App