const express = require('express');
const path = require('path');
const Sentiment = require('sentiment');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/emotion', (req, res) => {
    const sentiment = new Sentiment()
    const text = req.query.text
    const score = sentiment.analyze(text)
  
    res.send(score)
})
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})