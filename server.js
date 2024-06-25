import jsonServer from 'json-server';

const port = 3000;
const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running: ${port}`);
});
