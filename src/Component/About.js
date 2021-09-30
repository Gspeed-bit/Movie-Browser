import React from "react";
import Hero from "./Hero";

export default function About() {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              temporibus quisquam rem, minus adipisci dignissimos dolores, rerum
              facilis libero eum deleniti eveniet placeat itaque et aliquid
              veniam nobis ea reiciendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Earum hic veniam quod doloribus libero numquam
              asperiores itaque dicta tempora laboriosam expedita est, nostrum
              fugiat cumque repudiandae ab maiores corrupti id?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
