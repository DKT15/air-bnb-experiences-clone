import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  // using map to map over all of the data in the js file and apply it to the card prop that has been created.
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />; //spread operator is used to map over all of the items in the card rather than writing each item out individually.
  });

  // Linking to cards in the return below.
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
