import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="appShell">

      {/* TOP BAR */}
      <header className="topBar">
        <div className="logo">Seedin 🌱</div>
        <button className="walletBtn">Connect Wallet</button>
      </header>

      {/* MAIN LAYOUT */}
      <div className="mainLayout">

        {/* LEFT CONTENT */}
        <div className="centerContent">
          <h1>Launch Tokens on TON</h1>
          <p>Create, fund, and trade instantly on-chain.</p>

          <Link to="/create" className="ctaBtn">
            Create Token
          </Link>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="sideBar">
          <div className="sectionTitle">Trending</div>

          <div className="card">🔥 Token A</div>
          <div className="card">🔥 Token B</div>
          <div className="card">🔥 Token C</div>

          <div className="sectionTitle">New Launches</div>

          <div className="card">🆕 Token X</div>
          <div className="card">🆕 Token Y</div>
        </aside>

      </div>

      {/* BOTTOM NAV */}
      <footer className="bottomNav">
        <Link to="/" className="navItem">Home</Link>
        <Link to="/create" className="navItem create">Create</Link>
        <div className="navItem">Profile ▾</div>
      </footer>

    </div>
  );
}
