import { createServer } from 'node:http'

const server = createServer((req, res) => {
    res.write('HELLO WORLD');

    return res.end()
})

server.listen(8080) 