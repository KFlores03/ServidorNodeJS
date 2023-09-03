const http = require('http');

const HOST = "LocalHost";
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "application/json");

    const responsedata = {
        nombre: "Kevin Flores",
        mensaje: "Esta es una linea en formato JSON"
    };

    res.writeHead(200);
    res.end(JSON.stringify(responsedata));
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
});
// 