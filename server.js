const express = require('express')
const app = express()
const api = require('./backend/routes/api')
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api);

app.get('/', (req, res) => res.send('Welcome to Food Recycler!'))
app.listen(port, () => console.log(`Food Recycler started on port ${port}\n`))