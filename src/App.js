import './App.css';
import Home from './pages/Home';
import Nuestroclub from './pages/Nuestroclub';
import Serviciosadicionales from './pages/Serviciosadicionales';
import Piano from './pages/Piano';
import Ingles from './pages/Ingles';
import Planes from './pages/Planes';
import Contactenos from './pages/Contactenos';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Error404 from './pages/error404/Error404';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
      <Router>
        
            <Switch>

            <Route path="/nuestroclub">
                <Nuestroclub/>
              </Route>

              <Route path="/serviciosadicionales">
                <Serviciosadicionales/>
              </Route>

              <Route path="/piano">
                <Piano/>
              </Route>

              <Route path="/ingles">
                <Ingles/>
              </Route>

              <Route path="/planes">
                <Planes/>
              </Route>

              <Route path="/contactenos">
                <Contactenos/>
              </Route>

              <Route exact path="/">
                <Home />
              </Route>       

              <Route path="*">
                <Error404 />
              </Route>

            </Switch>
          
      </Router>
    </div>
  );
}

export default App;

