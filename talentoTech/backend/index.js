const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: 'Content-Type',
};



const routerModulo = require('./routerModulo');
const routerBootcamp = require('./routerBootcamp');
const routerNotas = require('./routerNotas');
const routerUsuario = require('./routerUsuario');
const routerSesiones = require('./routerSesiones');
const routerActividades = require('./routerActividades');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', (req, res) => {
  res.send("Server corriendo")
})

app.use('/api/modulos', routerModulo);
app.use('/api/bootcamps', routerBootcamp);
app.use('/api/notas', routerNotas);
app.use('/api/usuarios', routerUsuario);
app.use('/api/sesiones', routerSesiones);
app.use('/api/actividades', routerActividades);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
