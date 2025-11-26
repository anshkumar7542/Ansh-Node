const http = required("http");
const express = required("express");

const app = express();
const server = http.createServer(app);

app.use(express.static("/public"));
server.listen(4000, ()=>console.log(`Server Started at PORT:9000`));
