const express = require('express');

const app = express();

app.get('/noticias', (request, response) => {
    return response.json({
        evento: 'Maratona de Ideias',
        projeto: 'LockDown'
    });
});

app.listen(3333);