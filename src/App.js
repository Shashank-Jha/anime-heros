import React, { useState } from "react";
import "./styles.css";
import tanjiro from "./image/tanjiro.jpg";
import giyu from "./image/giyu.jpg";
import rengoku from "./image/rengoku.png";
import goku from "./image/goku_ui.jpg";
import vegeta from "./image/vegeta.png";
import gohan from "./image/gohan.jpg";
import deku from "./image/deku.jpg";
import bakugo from "./image/bakugo.jfif";
import shoto from "./image/shoto.jpg";

const animeDB = {
  "Demon Slayer": [
    {
      image: tanjiro,
      name: "Tanjiro ",
      power: "water & fire style"
    },
    {
      image: giyu,
      name: "Giyu",
      power: "water style"
    },
    {
      image: rengoku,
      name: "Rengoku",
      power: "fire style"
    }
  ],

  "DragonBall Z": [
    {
      image: goku,
      name: "Goku ",
      power: "Ultra Instict"
    },
    {
      image: vegeta,
      name: "Vegeta",
      power: "Super Saiyan God Blue 2"
    },
    {
      image: gohan,
      name: "Gohan",
      power: "Mystic Form"
    }
  ],

  "My Hero Academia": [
    {
      image: deku,
      name: "Izuku Midoriya ",
      power: "One For All"
    },
    {
      image: bakugo,
      name: "Bakugo",
      power: "Explosion"
    },
    {
      image: shoto,
      name: "Todoroki Shoto",
      power: "Fire & Ice"
    }
  ]
};

export default function App() {
  var animeTitle = Object.keys(animeDB);

  var [animeShow, setAnimeShow] = useState("Demon Slayer");

  function clickHandler(title) {
    setAnimeShow(title);
  }

  return (
    <div className="App">
      <h1>Anime Heros</h1>
      <h2>Click on the anime to see their heros !</h2>
      <div className="btnSection">
        {animeTitle.map((title) => (
          <button onClick={() => clickHandler(title)}> {title} </button>
        ))}
      </div>

      <hr />
      <ul className="animeListSection">
        {animeDB[animeShow].map((hero) => (
          <div className="hero">
            <li>
              <img src={hero.image} alt={hero.name} />

              <div className="heroDetails">
                <h3>{hero.name}</h3>
                <span> {hero.power}</span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
