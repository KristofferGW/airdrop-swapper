import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ethers } from 'ethers';

function Header() {
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    async function connectWallet() {
        if (!connected) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const _walletAddress = await signer.getAddress();
            setConnected(true);
            setWalletAddress(_walletAddress);
        } else {
            window.ethereum.setWalletAddress = null;
            setConnected(false);
            setWalletAddress('');
        }
    }

    return (
        <header style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
                <SiteTitle src="/logo.png" alt="airdrop swapper logo" style={{ width: '150px' }}/>
            </Link>
            <div style={{ marginLeft: 'auto' }}>
                <ConnectButton className='btn' onClick={connectWallet}>
                    {connected 
                        ? `${walletAddress.substring(0, 5)}....${walletAddress.slice(-5)}`
                        : "Connect Wallet"
                    }
                </ConnectButton>
            </div>
        </header>
    )
}

const SiteTitle = styled.img`
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
    flex-grow: 1;
`;

const ConnectButton = styled.button`
    background-color: #14a0c1;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 40px;

    &:hover {
        background-color: #117d94;
    }
`;

export default Header;