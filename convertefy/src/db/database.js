const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

// Crie a tabela de usuários
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)');

// Crie a tabela de conversões com uma coluna userId para associar conversões a usuários
db.run('CREATE TABLE IF NOT EXISTS conversions (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, fromCurrency TEXT, toCurrency TEXT, amount REAL, date TEXT)');

// Exporte a instância do banco de dados
module.exports = db;