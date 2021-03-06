import React from "react";

import { useHistory, Link } from "react-router-dom";


export default function Navbar({searchText, setSearchText}) {
 

  const history = useHistory()

function updatedSearchText (e){
  history.push("/search")
  setSearchText(e.target.value)
}


function handleSubmit(e){
  
}


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>Movie Browser</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="somewhere">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchText"
                onChange={updatedSearchText}
                value={searchText}
               
              />
              <button onClick={handleSubmit} className="btn btn-outline-success" type="submit"
                
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
