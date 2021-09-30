import React from "react";
import Hero from "./Hero";

export default function SearchView({keyWord,
  searchResults}) {
    const title = `You are searching for ......🍳🍳 ${keyWord}` 
  return (
    <div>
      <Hero text={title} />
     
    </div>
  );
}
