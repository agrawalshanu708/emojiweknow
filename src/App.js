import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "👩‍🚀": "Astronaut",
  "🧑‍✈️": "pilot",
  "👩‍🍳": "cook",
  "👩‍💻": "technologist",
  "🕵️": "Detective",
  "🧑‍🔧": "mechanic",
  "🧑‍💼": "office worker",
  "🧑‍🔬": "scientist",
  "🧑‍🎤": "singer",
  "🧑‍🎨": "Artist"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiview, setEmojiView] = useState("");

  function clickChange(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "this is not in our database";
    } else {
      emojiview = meaning;
    }

    setEmojiView(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiView(meaning);
  }

  return (
    <div className="App">
      <h1>Know your Profession </h1>
      <input onChange={clickChange} />
      <h2> {emojiview}</h2>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "large", padding: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
