const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS resultado');
        res.json({ message: 'Servidor funcionando!', resultado: rows[0].resultado });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro de conexão com o banco' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
