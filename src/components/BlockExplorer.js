import React, { useState, useEffect } from 'react';
const ethers = require('ethers');

const BlockExplorer = () => {
    const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_PROVIDER}`;
    const provider = ethers.getDefaultProvider(url);

    const setHandler = async (event) => {
        event.preventDefault();
        console.log("set Handler was clicked");
    }

    const showBlockData_ = async () => {
        console.log("hello");
        const blockNumber = 1;
        const timestamp = (await provider.getBlock(blockNumber)).timestamp;
        console.log(timestamp);
    }
    showBlockData_();

    return (
        <div>
            <h1>Ethereum Blockchain Explorer</h1>
        </div>
    )
}

export default BlockExplorer;
