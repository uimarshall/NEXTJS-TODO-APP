const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/api/items', (req, res) => {
  	let tasks= [
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
		]
    return app.render(req, res, '/index', {tasks})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})