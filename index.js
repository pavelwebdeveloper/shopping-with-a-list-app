const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
/*
const connectionString = process.env.DATABASE_URL
const { Pool } = require('pg')
const pool = new Pool({connectionString: connectionString})
*/

app
  .use(express.static(path.join(__dirname, 'client/build')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  
  
  // The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
	.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  
  
  