import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";

function Header() {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (logo) {
      logo.style.transform = 'rotateY(0deg)';
      logo.style.transition = 'transform 1s ease-in-out';

      const rotatelogo = () => {
        logo.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
          logo.style.transform = 'rotateY(0deg)';
        }, 1000);
      };

      const interval = setInterval(rotatelogo, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const { address, connected } = useWallet();

  const truncateAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div ref={logoRef} className="w-12 h-12 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#2980b9", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M20,80 L80,20 M20,20 L80,80" stroke="url(#grad1)" strokeWidth="20" strokeLinecap="round" />
              <path d="M30,70 L70,30 M30,30 L70,70" stroke="white" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl font-bold">Trigg3rX</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li className="flex items-center">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <Link to="/create-job" className="hover:text-secondary transition-colors">Create Job</Link>
            </li>
            <li className="flex items-center">
              <Link to="/dashboard" className="hover:text-secondary transition-colors">Dashboard</Link>
            </li>
            {connected ? (
              <li className="flex items-center">
                <WalletActionButton className="flex items-center p-3 px-10 text-white font-medium bg-[#5fc71e] hover:border-white border-2 hover:bg-[#4ca613] rounded-lg cursor-pointer tron_btn">
                  <span className="text-sm font-bold">{truncateAddress(address || "")}</span>
                </WalletActionButton>
              </li>
            ) : (
              <li className="flex items-center">
                <WalletActionButton className="flex items-center p-3 px-10 text-white font-medium bg-[#5fc71e] hover:border-white border-2 hover:bg-[#4ca613] rounded-lg cursor-pointer tron_btn">
                  Connect Wallet
                </WalletActionButton>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;