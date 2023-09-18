import express from 'express';
import { DatabaseMemory } from "./database-memory.js"
import { DatabasePostgres } from './database-postgres.js';

const app = express();
const port = 8080;

app.use(express.json());

// const database = new DatabaseMemory()
const database = new DatabasePostgres()


app.get('/videos', async (req, res) => {
    const  search = req.query.search

    const videos = await database.list()

    res.send(videos)
})

app.post('/videos', async (req, res) => {
    const { title, descricao, duracao } = req.body
    
    await database.create({
        title,
        descricao,
        duracao
    })
    
    return res.status(201).send()
})

app.put('/videos/:id', async (req, res) => {
    const videoId = req.params.id
    const { title, descricao, duracao } = req.body

    await database.update(videoId, {
        title,
        descricao,
        duracao
    })

    return res.status(204).send()
})

app.delete('/videos/:id', async (req, res) => {
    const videoId = req.params.id

    await database.delete(videoId)

    return res.status(204).send('Video deletado com sucesso!')
})


app.listen(port, () => {
    console.log(`Exemplo de app sendo ouvido na porta ${port}`);
})