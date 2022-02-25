const ethers = require('ethers');
const fs = require('fs')
require('dotenv').config()

//ethereum provider access
const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_PROVIDER}`;
const provider = ethers.getDefaultProvider(url);

const showBlockData = async () => {
    let currentBlock = (await provider.getBlockNumber());

    //array to store block data
    const blockData = [];

    //get past 10 blocks
    for (let i = 0; i < 10; i++) {
        if (blockData.length === 0) {
            try {
                // code for error testing
                console.log("current block is ", currentBlock)
                const blockInfo = (await provider.getBlock(currentBlock));
                blockInfo.id = currentBlock;
                blockInfo.key = currentBlock;
                blockInfo.gasUsed = blockInfo.gasUsed.toNumber();
                console.log(blockInfo);
                blockData.push(blockInfo);
            }
            catch (e) {
                // code for error handeling
                console.log(e)
            }

        } else {

            try {
                // code for error testing
                let currentBlock_ = currentBlock - i;
                console.log("current block is ", currentBlock_)
                const blockInfo = (await provider.getBlock(currentBlock_));
                blockInfo.id = currentBlock_;
                blockInfo.key = currentBlock_;
                blockInfo.gasUsed = blockInfo.gasUsed.toNumber();
                console.log(blockInfo);
                blockData.push(blockInfo);
            }
            catch (e) {
                // code for error handeling
                console.log(e)
            }
        }
    }

    // //forward blocks
    async function fowardBlocks(number) {

        try {
            // code for error testing
            console.log("current block is ", number);
            const blockInfo_ = (await provider.getBlock(number));
            blockInfo_.id = number;
            blockInfo_.key = number;
            blockInfo_.gasUsed = blockInfo_.gasUsed.toNumber();
            console.log(blockInfo_);
            blockData.push(blockInfo_);
        }
        catch (e) {
            // code for error handeling
            console.log(e)
        }


        try {
            //write block data in JSON file
            let data = JSON.stringify(blockData);
            fs.writeFile('./src/block-data-example.json', data, (err) => {
                if (err) throw err;
                console.log('Data written to file, line 67');
            });
        }
        catch (e) {
            // code for error handeling
            console.log(e)
        }
    }

    //call for a new block each 20s
    const interval = setInterval(function () {
        currentBlock = currentBlock + 1;
        fowardBlocks(currentBlock);
    }, 20000);

    console.log("line 77")

    //write block data in JSON file
    let data = JSON.stringify(blockData);
    fs.writeFile('./src/block-data-example.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    console.log('This is after the write call');
}

showBlockData();
