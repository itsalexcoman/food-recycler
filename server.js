const express = require('express')
const app = express()
const port = 3001

const colors = require('colors')
const cors = require('cors')
const api = require('./backend/routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', express.static('frontend/build'))
app.use('/api', api);

app.listen(port, () => console.log(`Food Recycler started on port ${port}\n`.yellow))