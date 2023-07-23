import mysql from 'mysql';
import config from './config.js';
import fetch from 'node-fetch';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import response from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));


app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	console.log(sql);
	let data = [userID];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getMovies', (req, res) => {


	const connection = mysql.createConnection(config);

	const sql = 'SELECT * FROM mdotto.movies';
	connection.query(sql, (error, results, fields) => {
		if (error) {
			console.error(error.message);
		} else {
			let string = JSON.stringify(results);
			res.send({ movies: results });
			console.log(results);
		}
		connection.end();
	});

});

  app.post('/api/addReview', (req, res) => {
	const connection = mysql.createConnection(config);

	let reviewID = Math.floor(Math.random() * 1000000) + 1;
	const {movieID, userID, Title, Body, Rating } = req.body;
	 
	
  
	const sql = 'INSERT INTO mdotto.Review (reviewID, movieID, userID, reviewTitle, reviewContent, reviewScore) VALUES (?, ?, ?, ?, ?, ?)';
	const values = [reviewID, movieID, userID, Title, Body, Rating];

	connection.query(sql, values, (error, results, fields) => {
		if (error) {
		console.log(error.message);
		
		}else {
			res.send('Success');
			connection.end();
  		}	
	});
  	});
	


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '172.31.31.77'); //for the deployed version, specify the IP address of the server