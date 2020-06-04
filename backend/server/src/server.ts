import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Caio',
        'Gilson',
        'Joao'
    ])
});

app.listen(3333);