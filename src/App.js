import React from "react";
import NewButton from "./button";

function App() {
  const data = [
    {
      name: "Mahdi",
      source: "./mahdi.jpg",
      description: "Mahdi Slimane Gérant principal chez IRON GYM sousse"
    },
    {
      name: "Moez",
      source: "./moez.jpg",
      description:
        "Moez El kouni MERN Stack Developer and Instructor chez Go My Code"
    },
    {
      name: "Amal",
      source: "./amal.jpg",
      description: "Amal LAHOUEL Hackerspace Manager chez Go My Code"
    }
  ];
  return (
    <div>
      <NewButton profile={data} />
    </div>
  );
}

export default App;
