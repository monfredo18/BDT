const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const documentsRoutes = require('./routes/documents');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // arquivos públicos

app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/documents', documentsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
