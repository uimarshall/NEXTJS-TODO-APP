const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  	res.json([
			{
				id: 1,
				title: "Push updates to github",
				completed: false
			},
			{
				id: 2,
				title: "Plan for sunday meeting",
				completed: false
			},
			{
				id: 3,
				title: "Go for recreation with family",
				completed: false
			},
			{
				id: 4,
				title: "Play basketball",
				completed: false
			}
			
		]); 
    // return app.render(req, res, '/index');
  });
module.exports = router;
 