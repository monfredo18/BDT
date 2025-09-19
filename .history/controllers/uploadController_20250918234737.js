const db = require('../config/db');

exports.uploadFile = async (req, res) => {
  try {
    const { subject, author_id } = req.body;
    const file = req.file;
    if (!file) return res.status(400).send('Nenhum arquivo enviado');

    const sql = `CALL adicionar_documento(?, ?, ?, ?, ?)`;
    await db.query(sql, [file.originalname, file.mimetype, file.path, subject, author_id]);

    res.status(200).send('Arquivo enviado com sucesso!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao enviar arquivo');
  }
};
