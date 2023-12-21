// importar o dotenv e carregar as configurações do arquivo .env
require("dotenv").config();

// definir as variáveis de ambiente obrigatórias
const environment = ["NODE_ENV"];

// percorrer as variáveis de ambiente obrigatórias
// e disparar um erro caso alguma delas não seja informada
environment.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

// exportar um objeto com as configurações
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
};
