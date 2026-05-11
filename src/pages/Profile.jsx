import { useTonWallet } from "@tonconnect/ui-react";
import { useState, useEffect } from "react";

export default function Profile() {
  const wallet = useTonWallet();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Placeholder for now (real balance comes next stage via TON API)
    if (wallet) {
      setBalance(0);
    }
  }, [wallet]);

  return (
    <div className="profilePage">

      <div className="profileCard">

        <h2>Profile</h2>

        {!wallet ? (
          <p>Connect wallet to view profile</p>
        ) : (
          <>
            <div className="walletBox">
              <p>Wallet:</p>
              <span>
                {wallet.account.address.slice(0, 6)}...
                {wallet.account.address.slice(-4)}
              </span>
            </div>

            <div className="walletBox">
              <p>Balance:</p>
              <span>{balance} TON</span>
            </div>

            <div className="actionRow">
              <button className="sendBtn">Send</button>
              <button className="receiveBtn">Receive</button>
            </div>
          </>
        )}

      </div>

    </div>
  );
}
