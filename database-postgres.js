import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {

    create(video) {
        const videoId = randomUUID()


    }

    async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike "%${search}%"`
        } else {
            videos = await sql`select * from videos`
        }

        return videos
    }
    
    update(id, video) {
    }

    delete(id) {
    }
    
}