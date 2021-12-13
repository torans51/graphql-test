const Dataloader = require('dataloader')

const db = require('./db')

const fetchAuthorsByBookId = async (bookIds) => {
    return bookIds.map(k => db.findAuthorById(k))
}

const fetchAllReviewsByBookId = async (bookIds) => {
    const reviews = await db.findReviews()
    return bookIds.map(bookId => reviews.filter(r => r.bookId === bookId))
}

exports.authorLoader = new Dataloader(keys => fetchAuthorsByBookId(keys))

exports.reviewsLoader = new Dataloader(keys => fetchAllReviewsByBookId(keys))