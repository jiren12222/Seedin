import { useState } from "react";

export default function CreateToken() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleCreate = () => {
    if (!name || !symbol) return alert("Fill all fields");

    console.log({
      name,
      symbol,
    });

    alert("Token draft created (no backend yet)");
  };

  return (
    <div className="container">
      <h1>Create Token</h1>

      <div className="form">
        <input
          placeholder="Token Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Symbol (e.g. SEED)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />

        <button onClick={handleCreate}>
          Create Token
        </button>
      </div>
    </div>
  );
}
