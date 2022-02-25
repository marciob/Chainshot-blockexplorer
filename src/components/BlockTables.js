import data from "../block-data-example.json";
import React, { useState, useEffect } from 'react';
const ethers = require('ethers');

const BlockTables = () => {

    const [blockInfo, setBlockInfo] = useState(data);

    //convert timestamp to relative time
    //timestamp on Ethereum has 10 digits, it needs to be converted to 13 digits in order to use this function
    function timeSince(timeStamp) {
        var now = new Date(),
            secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
        if (secondsPast < 60) {
            return secondsPast + 's' + ' ago';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'min' + ' ago';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'h' + ' ago';
        }
        if (secondsPast <= 2628000) {
            return parseInt(secondsPast / 86400) + 'd' + ' ago';
        }
        if (secondsPast <= 31536000) {
            return parseInt(secondsPast / 2628000) + 'mo' + ' ago';
        }
        if (secondsPast > 31536000) {
            return parseInt(secondsPast / 31536000) + 'y' + ' ago';
        }
    }

    //todo:
    //order table by block number
    //re-render anytime new data is add on json file

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Block #</th>
                        <th>Block Hash</th>
                        <th>Miner</th>
                        <th>Gas used</th>
                        <th>Txs #</th>
                    </tr>
                </thead>
                <tbody>
                    {blockInfo.sort((a, b) => {
                        if (b.number > a.number) return 1; // .number is added 
                        if (b.number < a.number) return -10; // .number is added
                        return 0;
                    }).map((block) =>
                        < tr >
                            <td >{timeSince(new Date(block.timestamp * 1000))}</td>
                            <td id="blockNumber">{block.number}</td>
                            <td id="blockHash" >{block.hash}</td>
                            <td>{block.miner}</td>
                            <td>{block.gasUsed}</td>
                            <td>{block.transactions.length}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default BlockTables;
