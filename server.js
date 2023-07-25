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

	const {movieID, userID, Title, Body, Rating } = req.body;
	 
	
  
	const sql = 'INSERT INTO mdotto.Review (movieID, userID, reviewTitle, reviewContent, reviewScore) VALUES (?, ?, ?, ?, ?)';
	const values = [movieID, userID, Title, Body, Rating];

	connection.query(sql, values, (error, results, fields) => {
		if (error) {
		console.log(error.message);
		
		}else {
			res.send('Success');
			connection.end();
  		}	
	});
  	});


	  app.post('/api/search', async (req, res) => {
		console.log('enter api/search call');
		const connection = mysql.createConnection(config);

		const { movieTitle, actorName, directorName } = req.body;
	  
		// Build the SQL query based on the provided search criteria
		const sql = `
			SELECT		M.name AS movie_title,
			CONCAT(D.first_name, ' ', D.last_name) AS director_name,
			IFNULL(GROUP_CONCAT(DISTINCT REV.reviewContent), '') AS all_reviews,
			IFNULL(AVG(REV.reviewScore), '') AS average_review_score
		FROM
			mdotto.movies M
		JOIN
			mdotto.movies_directors MD ON M.id = MD.movie_id
		JOIN
			mdotto.directors D ON MD.director_id = D.id
		JOIN
			mdotto.roles R ON M.id = R.movie_id
		JOIN
			mdotto.actors A ON R.actor_id = A.id
		LEFT JOIN
			mdotto.Review REV ON M.id = REV.movieID
			WHERE
			(? IS NULL OR M.name LIKE CONCAT('%', ?, '%'))
			AND (
			? IS NULL OR
			EXISTS (SELECT 1 FROM mdotto.actors A WHERE R.actor_id = A.id AND (CONCAT(A.first_name, ' ', A.last_name) LIKE CONCAT('%', ?, '%') OR A.first_name LIKE CONCAT('%', ?, '%')))
			)
			AND (
			? IS NULL OR
			EXISTS (SELECT 1 FROM mdotto.directors D2 WHERE MD.director_id = D2.id AND (CONCAT(D2.first_name, ' ', D2.last_name) LIKE CONCAT('%', ?, '%') OR D2.first_name LIKE CONCAT('%', ?, '%')))
			)
		GROUP BY
			M.name, D.first_name, D.last_name;`;

		const values = [movieTitle, movieTitle, actorName, actorName, actorName, directorName, directorName, directorName]
		connection.query(sql, values, (error, results, fields) => {

		
		if (error) {
			console.error(error.message);
		} else {
			res.send(results);
			console.log(results);
		}
		connection.end();
		});
		
	  
		//try {
		  // Execute the query using the connection pool
		  //const [rows] = connection.query(sql, values, (error, results, fields));
		  
	  
		  // Process the retrieved data and send it back to the frontend
		  //const movies = rows.map((row) => ({
			//title: row.title,
			//director: `${row.director_first_name} ${row.director_last_name}`,
		//}));
		//res.json(rows);
		//res.json(movies);
		//res.send({ movies: results });
	  //} catch (error) {
		//console.error('Error while executing the search query:', error);
	  //}
	});

	  
	
	


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '172.31.31.77'); //for the deployed version, specify the IP address of the server