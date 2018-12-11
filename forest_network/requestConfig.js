var {apiDef} = require('../config/ForestNetwork');

const getRequestAbciInfo = () => {
    return {
        method: 'get',
        baseURL: apiDef.BASE_URL,
        url: apiDef.abci_info,
    }
}

const getRequestBlock = (height) => {
    return {
        method: 'get',
        baseURL: apiDef.BASE_URL,
        url: apiDef.block,
        params: {
            height: height
        }
    };
}

module.exports = {
    getRequestAbciInfo,
    getRequestBlock,
}