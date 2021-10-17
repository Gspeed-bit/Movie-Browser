import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"
export default function NotFound() {
    return (
<div className="error-page">
    <h2>Page not found. </h2>
    <h4 className="ErrorPage__message">
    Our apologies, this is almost certainly not the page you were looking for.</h4>
    <h4 className="ErrorPage__message">Please try the search tool, above, or visit our <Link to="/" className="ErrorPage__message_link">home page</Link>.</h4>
    <Link to="/" className="img-link">
        <img src="https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png" alt="Return to the Homepage" /></Link>
   
<div className="button">
<Link to="/">
     <Button >
        <p>Back To The Homepage</p>
     </Button>
 </Link>
 </div>
  
</div>
    )
}

