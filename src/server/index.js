import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Alex\'s mum is a lovely lady and now she is very expressy.\n')
})

app.listen(8080, () => {
    console.log('We are listening on port 8080.') // eslint-disable-line no-console
})
