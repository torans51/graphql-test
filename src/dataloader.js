const Dataloader = require('dataloader')

const db = require('./db')

const fetchAuthorsByKeys = async (keys) => {
    return keys.map(k => db.findAuthorById(k))
}

exports.authorLoader = new Dataloader(keys => fetchAuthorsByKeys(keys))
