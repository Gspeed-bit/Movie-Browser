import React from 'react'
import Hero from "./Hero";

export default function Home() {
    return (
        <div>
        <Hero text="Welcome to React 201" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                temporibus quisquam rem, minus adipisci dignissimos dolores, rerum
                facilis libero eum deleniti eveniet placeat itaque et aliquid
           
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
