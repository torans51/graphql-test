const express = require('express')
// import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

app.listen(8888, () => {
  console.log("Server app and running ...")
})
