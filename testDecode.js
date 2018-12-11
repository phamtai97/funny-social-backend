const transaction = require('./forest_network/lib/transaction');
const secretKey = 'SA72RQJR3RUU4ACDSM3QMLYQIH3FIWRGFI3HM6X7NPYT3GMEPNNPNMEP';
const publicKey = 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO';

const hValue = "E8E28CDF863D1A89D89FDA17EFB9C878051FF063";
const buf = Buffer.from(hValue);

var data = "ATA8i2kusx/LGR5eAZ/7L2FhJIL8wtK3QdYou1L0XkGbXSLfAAAAAAAAAAEAAQAjMB3E9jeB6Vq5oRwzKMwi5omyIV71sg7mRlMKKXqNwzMkDCjZtz7CjPZuCL8TmGDO2fjIH8UcLxNYBM2KkRb/l89C7vMg3wITL2dmGwQXihie7bgL20r1i5yu+6PO//p89GUJ";

data = new Buffer(data, 'base64');
tx = transaction.decode(data);
console.log('tx', tx)