import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">Seedin 🌱</div>
        <Link to="/create" className="btn">Create Token</Link>
      </nav>

      <main className="hero">
        <h1>Launch Tokens on TON</h1>
        <p>Decentralized token creation and trading for communities.</p>

        <div className="actions">
          <Link to="/create" className="primary">Create Token</Link>
          <button className="secondary">Explore Launches</button>
        </div>
      </main>

      <section className="grid">
        <div className="card">🔥 Trending Tokens</div>
        <div className="card">📈 Live Trades</div>
        <div className="card">🚀 New Launches</div>
      </section>
    </div>
  );
}
