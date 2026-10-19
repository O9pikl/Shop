const express = require('express');

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('ggdgddfdf')
});

app.listen(PORT, () => {
    console.log(`Shop server running on port ${PORT}`)
})