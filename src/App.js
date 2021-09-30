import Navbar from './Component/Navbar';
import Home from './Component/SearchView'
import About from './Component/About'
import './App.css';
import {useState, useEffect} from "react"
import SearchView from './Component/SearchView'
import {Switch,Route} from "react-router-dom"


function App() {


const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText ] = useState("")


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
          <Route path="/search">
            <SearchView keyWord ={searchText} searchOutput={searchResults}/>
          </Route>
         </Switch>
        
    </div>
  );
}

export default App;
