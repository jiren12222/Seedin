import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

export default function Home() {
  const [tokens, setTokens] = useState([]);

  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  useEffect(() => {
    const fetchTokens = async () => {
      const { data } = await supabase
        .from("tokens")
        .select("*")
        .order("created_at", { ascending: false });

      setTokens(data || []);
    };

    fetchTokens();
  }, []);

  return (
    <div className="appShell">

      {/* TOP BAR */}
      <header className="topBar">
        <div className="logo">Seedin 🌱</div>

        <button
          className="walletBtn"
          onClick={() => tonConnectUI.openModal()}
        >
          {wallet ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </header>

      {/* WALLET INFO */}
      {wallet && (
        <div style={{ padding: "0 20px", fontSize: "12px", opacity: 0.7 }}>
          {wallet.account.address.slice(0, 6)}...
          {wallet.account.address.slice(-4)}
        </div>
      )}

      {/* MAIN */}
      <div className="mainLayout">

        {/* CENTER */}
        <div className="centerContent">
          <h1>Launch Tokens on TON</h1>
          <p>Create, fund, and trade community tokens instantly.</p>

          <Link to="/create" className="ctaBtn">
            Create Token
          </Link>
        </div>

        {/* SIDEBAR */}
        <aside className="sideBar">

          <div className="sectionTitle">Trending</div>
          <div className="card">🔥 SEED</div>
          <div className="card">🔥 TONX</div>

          <div className="sectionTitle">New Launches</div>

          {tokens.length === 0 ? (
            <div className="card">No tokens yet</div>
          ) : (
            tokens.map((t) => (
              <div key={t.id} className="card">
                🆕 {t.name} ({t.symbol})
              </div>
            ))
          )}

        </aside>
      </div>

      {/* BOTTOM NAV */}
      <footer className="bottomNav">
        <Link to="/" className="navItem active">Home</Link>
        <Link to="/create" className="navItem create">Create</Link>
        <div className="navItem">Profile ▾</div>
      </footer>

    </div>
  );
}
