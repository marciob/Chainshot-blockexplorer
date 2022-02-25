const moment = require('moment');

// // var timestamp = 1607110465663
// // var date = new Date(timestamp);
// // // console.log(date.getTime())
// // // console.log(date)
// // // console.log(date.getDate() +
// // //     "/" + (date.getMonth() + 1) +
// // //     "/" + date.getFullYear() +
// // //     " " + date.getHours() +
// // //     ":" + date.getMinutes() +
// // //     ":" + date.getSeconds());
// // console.log(new Date(timestamp))


// blockchain explorer to do:
// add slice to addresses:
//  	0xasjk...asasakj
// add link to addresses
//  add auto reload to data
// 	    probably using useEffect



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

// d = new Date(1644886164000);

// console.log(typeof d)

console.log(timeSince(new Date(1644886264000)));


let numbers = [0, 1, 6, 2, 3, 50, 12, 120, 30];
numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);


// let timing = moment(1644868335000).format();

// let now = new Date().getTime();

// console.log(timing);
// console.log(now);



    // //past 10 blocks
    // for (let i = 0; i < 10; i++) {
    //     if (blockData.length === 0) {
    //         console.log("current block is ", currentBlock)
    //         //console.log(currentBlock_);
    //         const blockInfo = (await provider.getBlock(currentBlock));
    //         //console.log(blockInfo);
    //         blockInfo.id = currentBlock;
    //         blockInfo.key = currentBlock;
    //         blockInfo.gasUsed = blockInfo.gasUsed.toNumber();
    //         console.log(blockInfo);
    //         blockData.push(blockInfo);
    //     } else {
    //         let currentBlock_ = currentBlock - i;
    //         console.log("current block is ", currentBlock_)
    //         //console.log(currentBlock_);
    //         const blockInfo = (await provider.getBlock(currentBlock_));
    //         //console.log(blockInfo);
    //         blockInfo.id = currentBlock_;
    //         blockInfo.key = currentBlock_;
    //         blockInfo.gasUsed = blockInfo.gasUsed.toNumber();
    //         console.log(blockInfo);
    //         blockData.push(blockInfo);
    //     }
    // }

    // // //forward blocks
    // function fowardBlocks() {
    //     let currentBlock_ = currentBlock + 1;
    //     console.log("current block is ", currentBlock_);
    //     //console.log(currentBlock_);
    //     //console.log(blockInfo);
    //     const blockInfo_ = (await provider.getBlock(currentBlock_));
    //     blockInfo_.id = currentBlock_;
    //     blockInfo_.key = currentBlock_;
    //     blockInfo_.gasUsed = blockInfo_.gasUsed.toNumber();
    //     console.log(blockInfo_);
    //     blockData.push(blockInfo_);
    // }

    // const interval = setInterval(function () {
    //     fowardBlocks();
    // }, 30000);