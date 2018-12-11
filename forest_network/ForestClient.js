var apiNode = require('./requestConfig');
var axios = require('axios');
let { RpcClient } = require('tendermint')

class ForestClient {
    constructor(urlWS) {
        this.wsClient = RpcClient(urlWS);
    }

    async getLastBlock() {
        let res = -1;

        await axios.request(apiNode.getRequestAbciInfo()).then((response) => {
            const { data } = response;
            res = data.result.response.last_block_height;
        }).catch((error) => {
            console.log(error);
            res = -1;
        })

        return res;
    }

    async getBlocks(from, to) {
        let res = [];

        for (let i = from; i < to; i++) {
            await this.getBlock(i)
                .then((response) => {
                    res.push(response);
                })
                .catch((error) => console.log(error));
        }

        return res;
    }

    async getBlock(height) {
        let res = null;
        await axios.request(apiNode.getRequestBlock(height))
            .then((response) => {
                const { data } = response;
                res = data.result.block;
            })
            .catch((error) => {
                console.log(height, error);
            });

        return res;
    }
};

module.exports = ForestClient;
