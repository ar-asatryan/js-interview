
let redisObj = {
    data1: {
        "id": 01,
        "what": "case -> callback",
        "isOkay": true
    },
    data2: {
        "id": 02,
        "what": "case -> testing promise",
        "isOkay": true
    },
    data3: {
        "id": 03,
        "what": "case -> async/await",
        "isOkay": true
    }
};

function logData (data) {
    console.log(data)
}


console.log("Starting Data....")
setTimeout(() => {
    console.log("Preparing Data....")
}, 2000);


// TODO: case1-callbacks
let data1;

function getDataFromRedis (cb, time) {
    setTimeout(() => {
        data1 = redisObj.data1;
        cb(data1);
    }, time)
}

getDataFromRedis(logData, 3000);


// TODO: case2-promises

let data2;

function getRedisData(cb, time) {

    const pr = new Promise( (res, rej) => {
        setTimeout(()=>{
            data2 = redisObj.data2;
            res(data2);
        },time)
    });

    pr.then( () => {
        cb(data2);
    });
}

getRedisData(logData, 5000);

// TODO: case3-async/await

let data3;

async function getRedisData3(cb, time) {
    const promiseX = new Promise( (res, rej) => {
        setTimeout( () => {
            data3 = redisObj.data3;
            res();
        }, time)}
    );

    await promiseX;
    cb(data3);
}

getRedisData3(logData, 7000);

