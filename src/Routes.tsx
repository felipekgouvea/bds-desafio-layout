import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import NavBar from './components/NavBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cars">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
