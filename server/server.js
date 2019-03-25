const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

nextapp.prepare().then(() => {
  const app = express()

  app.get('/api/items', (req, res) => {
  	res.json([
			{
				id: 1,
				title: "Push updates to github",
				completed: false
			},
			{
				id: 2,
				title: "Plan for sunday metting",
				completed: false
			},
			{
				id: 3,
				title: "Go for recreation with family",
				completed: false
			},
			{
				id: 4,
				title: "Play basket ball",
				completed: false
			}
		]) 
    // return app.render(req, res, '/index', {tasks})
  })

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})