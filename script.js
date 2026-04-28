import { useState } from "react";

export default function Flashcards() {

  const [cards, setCards] = useState([
    { question: "What is HTML?", answer: "HyperText Markup Language" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" },
    { question: "What is JavaScript?", answer: "Programming language for web" },
    { question: "What is React?", answer: "JavaScript library for UI" }
  ]);

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const [qInput, setQInput] = useState("");
  const [aInput, setAInput] = useState("");

  // Show Answer
  const showAnswer = () => {
    setShow(true);
  };

  // Next Card
  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setShow(false);
    }
  };

  // Previous Card
  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setShow(false);
    }
  };

  // Add Card
  const addCard = () => {
    if (!qInput || !aInput) {
      alert("Fill both fields!");
      return;
    }

    setCards([...cards, { question: qInput, answer: aInput }]);
    setQInput("");
    setAInput("");
  };

  // Update Card
  const updateCard = () => {
    if (!qInput || !aInput) return;

    const updated = [...cards];
    updated[index] = { question: qInput, answer: aInput };

    setCards(updated);
  };

  // Delete Card
  const deleteCard = () => {
    if (cards.length === 1) {
      alert("At least one card required!");
      return;
    }

    const updated = cards.filter((_, i) => i !== index);
    setCards(updated);
    setIndex(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📚 Flashcards</h2>

      {/* CARD */}
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
        <h3>{cards[index].question}</h3>
        {show && <p>{cards[index].answer}</p>}
      </div>

      <button onClick={showAnswer}>Show Answer</button>

      <br />

      <button onClick={prevCard}>Previous</button>
      <button onClick={nextCard}>Next</button>

      <hr />

      {/* INPUTS */}
      <h3>Manage Flashcards</h3>

      <input
        placeholder="Question"
        value={qInput}
        onChange={(e) => setQInput(e.target.value)}
      />

      <input
        placeholder="Answer"
        value={aInput}
        onChange={(e) => setAInput(e.target.value)}
      />

      <br />

      <button onClick={addCard}>Add</button>
      <button onClick={updateCard}>Update</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}