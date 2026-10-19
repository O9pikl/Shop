const express = require('express');

const app = express();
const PORT = process.env.PORT || 3067;

// Start timer
const startTime = performance.now();

app.get('/', (req, res) => {
    res.send('ggdgddfdf');
});

app.listen(PORT, () => {
    const startupTime = performance.now() - startTime;

    console.log(`Shop server running on port ${PORT}`);
    console.log(`Startup time: ${startupTime.toFixed(2)} ms`);
});