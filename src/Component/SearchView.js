import React from "react";
import Hero from "./Hero";

export default function SearchView({inputText, setSearchText}) { //
  const title = `You are searching for ${inputText}`
console.log(inputText)
  return (
    <div>
      <Hero text={title} />
     
    </div>
  );
}
