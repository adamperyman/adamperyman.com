import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Alex\'s mum is a lovely lady.\n')
})

app.listen(8080, () => {
    console.log('We are listening on port 3000.') // eslint-disable-line no-console
})

