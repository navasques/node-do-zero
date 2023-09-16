import express from 'express';
import { DatabaseMemory } from "./database-memory.js"

const app = express();
const port = 8080;

app.use(express.json());

const database = new DatabaseMemory()

app.get('/videos', (req, res) => {
    const  search = req.query.search

    const videos = database.list()

    res.send(videos)
})

app.post('/videos', (req, res) => {
    const { title, descicao, duracao } = req.body
    
    database.create({
        title,
        descicao,
        duracao
    })
    
    return res.status(201).send()
})

app.put('/videos/:id', (req, res) => {
    const videoId = req.params.id
    const { title, descicao, duracao } = req.body

    database.update(videoId, {
        title,
        descicao,
        duracao
    })

    return res.status(204).send()
})

app.delete('/videos/:id', (req, res) => {
    const videoId = req.params.id

    database.delete(videoId)

    return res.status(204).send()
})


app.listen(port, () => {
    console.log(`Exemplo de app sendo ouvido na porta ${port}`);
})