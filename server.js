const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Welcome to Food Recycler!'))

app.listen(port, () => console.log(`Food Recycler started on port ${port}`))