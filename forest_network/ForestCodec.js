const transaction = require('./lib/transaction');

const encodeTransaction = (tx) => {
    return transaction.encode(tx);
}

const decodeTransacion = (dataBase64) => {
    if (dataBase64 === null || dataBase64 === undefined) return null;
    
    let rawData = Buffer.from(dataBase64, 'base64');

    return transaction.decode(rawData);
}

module.exports = {
    encodeTransaction,
    decodeTransacion
}