var ForestClient = require('../forest_network/ForestClient');

class FunnyServer {
    constructor() {
        this.db = null;
        this.forestClient = null;
    }

    initialize = (urlWS, database) => {
        this.forestClient = new ForestClient(urlWS);
        this.db = database;
    }
    
};

module.exports = FunnyServer;