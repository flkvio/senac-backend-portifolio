const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
//   console.log(req);
  res.setHeader("Tipo-Conteudo", "texto/html");

  let caminho = "./views/";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      caminho += "index.html";
      break;
    case "/servico":
      res.statusCode = 200;
      caminho += "servico.html";
      break;
    case "/contato":
      res.statusCode = 200;
      caminho += "contato.html";
      break;

    case "/orcamentos":
      res.statusCode = 301;
      caminho += "contato.html";
      break;

    default:
      res.statusCode = 404;
      caminho += "paginadeerro.html";
      break;
  }

  fs.readFile(caminho, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

const port = 3009;
server.listen(port, "localhost", () => {
  console.log(`Ouvindo a requisição na porta ${port}`);
});
