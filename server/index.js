require('../db/dbConnection');
const { server } = require('./app');

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
