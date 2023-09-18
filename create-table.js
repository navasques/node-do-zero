import { sql } from './db.js'

sql `
    CREATE TABLE videos (
        id  TEXT PRIMARY KEY,
        title TEXT,
        descricao TEXT,
        duracao INTEGER
    );
`.then(() => {
    console.log('Tabela criada!');
})