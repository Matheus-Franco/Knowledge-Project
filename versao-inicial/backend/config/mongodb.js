const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/knowledge_stats", { useNewUrlParser: true })
  .catch((e) => {
    const msg = "ERRO! NÃO FOI POSSIVEL CONECTAR COM O MONGODB.";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
