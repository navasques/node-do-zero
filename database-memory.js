import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    list() {
        return Array.from(this.#videos.entries()).map((arrayVideos) => {
            const idVideo = arrayVideos[0]
            const data = arrayVideos[1]

            return {
                idVideo, 
                ...data
            }
        })
    }
    
    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
    
}