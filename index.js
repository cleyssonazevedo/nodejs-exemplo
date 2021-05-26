const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    res.send({
        status: 'ok'
    });
})

app.listen(3000, () => console.log('Server started'));
