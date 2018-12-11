let { RpcClient } = require('tendermint');

let client = RpcClient('https://zebra.forest.network');

client.subscribe({query: "'tm.event = 'Tx'"}).then((res) => Console.log(res)).catch((err) => {console.log("what"); console.log(err)});