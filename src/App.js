import Navbar from './Component/Navbar';
import About from './Component/About'
import './App.css';
import {useState, useEffect,useRef} from "react"
import SearchView from './Component/SearchView'
import {Switch,Route} from "react-router-dom"


function App() {

  
const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText ] = useState(" ")

console.log(searchText)
  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Switch>
          <Route path="/" exact>
          <SearchView inputText ={searchText} searchResults={searchResults}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
         </Switch>
        
    </div>
  );
}

export default App;
