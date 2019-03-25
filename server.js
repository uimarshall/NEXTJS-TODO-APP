const express = require('express')
const next = require('next');
const routes = require('./routes/index');

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

nextapp.prepare().then(() => {
  const app = express();
  app.use('/api/items', routes); 



  app.get('*', (req, res) => {
    return handle(req, res)
  });

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})