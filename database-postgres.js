import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {

    async create(video) {
        const videoId = randomUUID()
        const { title, descricao, duracao } = video
        
        await sql`insert into videos (id, title, descricao, duracao) values (${videoId}, ${title}, ${descricao}, ${duracao})` 
    }

    async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else {
            videos = await sql`select * from videos`
        }

        return videos
    }
    
    async update(id, video) {
        const { title, descricao, duracao } = video

        await sql`update videos set title = ${title}, descricao = ${descricao}, duracao = ${duracao} where id = ${id}`
    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
    
}