import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
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

  return (
    <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <div className="py-16 px-4 mb-8 flex flex-col items-center">
          <div ref={logoRef} className="w-64 h-32 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#3498db", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#2980b9", stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M20,80 L80,20 M20,20 L80,80" stroke="url(#grad1)" strokeWidth="20" strokeLinecap="round" />
              <path d="M30,70 L70,30 M30,30 L70,70" stroke="white" strokeWidth="10" strokeLinecap="round" />
              <text x="100" y="60" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#fff">Trigg3rX</text>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Trigg3rX</h1>
          <p className="text-xl">Empowering TRON with Advanced Cross-Chain Automation</p>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goal</h2>
          <p className="mb-4">
            Trigg3rX aims to bring advanced automation capabilities to the TRON network by extending the functionalities of Keeper Network. We utilize Keeper Network, an AVS developed on Ethereum using Eigenlayer, and forward its functionalities to TRON via LayerZero Protocol.
          </p>
          <p>
            Our mission is to empower TRON developers and users by introducing seamless automation, reducing manual intervention, and enhancing operational efficiency on the blockchain.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {['Time-Based Automation', 'Condition-Based Automation', 'Event-Based Automation'].map((feature, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p>{feature === 'Time-Based Automation' ? 'Schedule and execute tasks at specific times or intervals.' :
                  feature === 'Condition-Based Automation' ? 'Trigger actions based on specific conditions like price changes.' :
                  'Execute tasks in response to blockchain events like token transfers.'}</p>
            </div>
          ))}
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cross-Chain Innovation</h2>
          <p className="mb-4">
            Trigg3rX leverages both Ethereum and TRON ecosystems to create a cross-chain AVS solution for automating DeFi tasks and more. By using LayerZero Protocol as a bridge, we transfer the utility of our existing Keeper Network from Ethereum to TRON, enabling seamless cross-chain automation.
          </p>
        </div>

        <Link to="/create-job" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-purple-600 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default HomePage;