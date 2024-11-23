import React, { useState } from 'react';
import { ethers } from 'ethers';
import metamaskLogo from '../Assets/wallet/metamask-vector-logo-seeklogo/metamask-seeklogo.svg'; // MetaMask logo

const ConnectWallet = ({ isUserLoggedIn }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');
  const [networkName, setNetworkName] = useState('');

  //const SEPOLIA_RPC_URL = 'https://sepolia.infura.io/v3/6e847c54356547a9b375e43edb2cf995';
  const SEPOLIA_CHAIN_ID = '0xAA36A7'; // Chain ID for Sepolia (11155111)

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask to connect your wallet');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (currentChainId !== SEPOLIA_CHAIN_ID) {
        await switchToSepolia();
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();

      setWalletAddress(address);
      setIsConnected(true);
      setNetworkName(network.name);
      setError('');
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error(err);
    }
  };

  const switchToSepolia = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (err) {
      if (err.code === 4902) {
        setError('Sepolia network not added in MetaMask. Please add it manually.');
      } else {
        setError('Failed to switch to the Sepolia network');
      }
      console.error(err);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setIsConnected(false);
    setNetworkName('');
    setError('');
  };

  if (!isUserLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Please Log In</h1>
          <p className="text-gray-600">
            You must log in before connecting your wallet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg rounded-br-[30px] rounded-bl-[30px] rounded-tl-[30px] rounded-tr-[30px] shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Connect Your Wallet</h1>

        <div className="flex justify-center mb-6">
          <img
            src={metamaskLogo}
            alt="MetaMask"
            className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={connectWallet}
          />
        </div>

        {isConnected ? (
          <div>
            <p className="text-lg text-green-500 mb-4">
              Wallet connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>
            <p className="text-lg text-blue-500 mb-4">
              Connected to: {networkName.charAt(0).toUpperCase() + networkName.slice(1)} Network
            </p>
            <button
              onClick={disconnectWallet}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all duration-200"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Connect Wallet
          </button>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ConnectWallet;
