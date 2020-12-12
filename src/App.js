import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const submitHandle = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    if (count <= 0) {
      number = 1;
    }
    if (count > 9) {
      number = 9;
      alert("You can have maximum 9 paragraphs");
    }

    setText(data.slice(0, number));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum ..? </h3>
      <h4>Lets get something else </h4>
      <form onSubmit={submitHandle}>
        <label htmlFor="number">How many Paragraphs :</label>
        <input
          name="number"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
