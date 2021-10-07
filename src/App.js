import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About'
import './App.css';
import {useState, useEffect,useRef} from "react"
import SearchView from './Component/SearchView'
import {Switch,Route} from "react-router-dom"


function App() {

  
const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText ] = useState("")


useEffect(()=>{
  if(searchText){    
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=0359fd758c84889f671ad1bcaab6eada&language=en-US&query=${searchText}&page=1&include_adult=false`)
  .then(res => res.json())
  .then(data =>{
    setSearchResults(data.results)
    console.log(data)
  })


}
},[searchText])

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
            <SearchView keyWord ={searchText} searchResults={searchResults}/>
          </Route>
         </Switch>

      
        
    </div>
  );
}

export default App;
