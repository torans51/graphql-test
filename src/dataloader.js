const Dataloader = require('dataloader')

const db = require('./db')

const fetchAuthorsByKeys = async (keys) => {
    return keys.map(k => db.findAuthorById(k))
}

const fetchAllReviewsByBookId = async (bookIds) => {
    const reviews = await db.findReviews()
    return bookIds.map(bookId => reviews.filter(r => r.bookId === bookId))
}

exports.authorLoader = new Dataloader(keys => fetchAuthorsByKeys(keys))

exports.reviewsLoader = new Dataloader(keys => fetchAllReviewsByBookId(keys))