import express from 'express';

const router = express.Router();
const app = express();

app.use(express.json());

app.get('/videos', async (req, res) => {
    const  search = req.query.search

    const videos = await database.list()

    res.send(search)
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

export default router;