const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/db/database");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//rota registro
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao verificar usuário.");
    } else if (row) {
      res.status(400).send("E-mail já está em uso.");
    } else {
      db.run("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Erro ao registrar usuário.");
        } else {
          res.status(201).send("Usuário registrado com sucesso.");
        }
      });
    }
  });
});

//rota login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao verificar usuário.");
    } else if (row) {
      res.status(200).send("Login bem-sucedido.");
    } else {
      res.status(401).send("Credenciais inválidas.");
    }
  });
});
//rota historico
app.get("/conversions", (req, res) => {
  db.all("SELECT * FROM conversions", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao buscar histórico de conversões.");
    } else {
      res.status(200).json(rows);
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor está ativo em http://localhost:${port}`);
});