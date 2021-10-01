import Navbar from './Component/Navbar';
import Home from './Component/SearchView'
import About from './Component/About'
import './App.css';
import {useState, useEffect,useRef} from "react"
import SearchView from './Component/SearchView'
import {Switch,Route} from "react-router-dom"


function App() {

  
const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText ] = useState("")

console.log(searchText)
  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
            <SearchView inputText ={searchText} setSearchText={setSearchText}/>
          </Route>
         </Switch>
        
    </div>
  );
}

export default App;
