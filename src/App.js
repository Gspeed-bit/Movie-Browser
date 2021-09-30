import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About'
import './App.css';
import {Switch,Route} from "react-router-dom"


function App() {
  return (
    <div >
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
         </Switch>
        
    </div>
  );
}

export default App;
