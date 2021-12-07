const books = [
    {
        id: '1',
        title: 'I promessi sposi',
        description: 'Descrizione dei promessi sposi',
        authorId: 1,
    },
    {
        id: '2',
        title: 'Il principe',
        description: 'Descrizione de il principe',
        authorId: 2,
    },
    {
        id: '3',
        title: 'Il cinque maggio',
        description: 'Descrizione de il cinque maggio',
        authorId: 1,
    },
    {
        id: '4',
        title: 'Adelchi',
        description: 'Descrizione di Adelchi',
        authorId: 1,
    }
]

const authors = [
    {
        id: 1,
        firstname: 'Alessandro',
        lastname: 'Manzoni'
    },
    {
        id: 2,
        firstname: 'Niccolò',
        lastname: 'Machiavelli'
    }
]

const reviews = [
    {
        id: "1",
        body: "This is the first review",
        from: "Anonymous",
        bookId: "1"
    },
    {
        id: "2",
        body: "This is the second review",
        from: "Antani",
        bookId: "2"
    },
    {
        id: "3",
        body: "This is the third review",
        from: "Joe",
        bookId: "2"
    },
    {
        id: "4",
        body: "This is the forth review",
        from: "CB",
        bookId: "1"
    },
    {
        id: "5",
        body: "This is the fifth review",
        from: "Raffaello",
        bookId: "2"
    }
]

exports.findBooks = async () => {
    console.log("find books")
    return books
}

exports.findBookById = async (id) => {
    console.log(`find book ${id}`)
    return books.find(b => b.id === id)
}

exports.findAuthors = async () => {
    console.log("find authors")
    return authors
}

exports.findAuthorById = async (id) => {
    console.log(`find author ${id}`)
    return authors.find(a => a.id === id)
}

exports.findReviews = async (filter) => {
    if (filter && filter.bookId) {
        console.log(`find reviews by book ${filter.bookId}`)
        return reviews.filter(r => r.bookId === filter.bookId)
    }

    console.log('find reviews')
    return reviews
}

exports.findReviewById = async (id) => {
    console.log(`find review ${id}`)
    return reviews.find(r => r.id === id)
}