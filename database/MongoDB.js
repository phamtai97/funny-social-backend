var mongdb = required('mongodb');
var MongoClient = mongdb.MongoClient;
var configMongoDB = require('../config/MongoDB');

async const connect = () => {
    MongoClient.connect(configMongoDB.url, configMongoDB.option, (err, client) => {
        if (err) return error;
        return client.db(configMongoDB.databaseName);
    });
}

async const insertOne = (db, collectionName, data) => {
    db.collection(collectionName).insertOne(data, (err, res) => {
        return err || (!res ? err : res);
    });
}

async const insertOrUpdate = () => {
    throw 'asdasd';
}

async const findOne = (db, collectionName, query, option = {}) => {
    db.collection(collectionName).findOne(query, option, (err, result) => {
        return err || !result ? reject(err) : resolve(result)
    });
}

async const findOneAndUpdate = (db, collectionName, filter, update) => {
    db.collection(collectionName).findOneAndUpdate(filter, update, (err, result) => {
        return err || !result ? reject(err) : resolve(result)
    })
}

async const findMany = (db, collectionName, query, option = {}) => {
    db.collection(collectionName).find(query, option).toArray((err, result) => {
        return err || !result || result.length === 0 ? reject(err) : resolve(result);
    })
}

module.exports = {
    connect,
    insertOne,
    insertOrUpdate,
    findOne,
    findOneAndUpdate,
    findMany
}