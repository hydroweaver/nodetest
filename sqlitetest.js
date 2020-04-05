const http = require('http');
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./test.db');

var record = [];

http.createServer((request, response)=>{
	request.on('error', (err)=>{
		console.log(err);
	}).on('data', (data)=>{
		record.push(data);
	}).on('end', ()=>{
		console.log(request);
		db.serialize(()=>{		
			var stmt = db.prepare("INSERT INTO karanverma2 VALUES (?, ?)");
			stmt.run(request.method, request.method, ()=>{	
				response.end("Data written to table");
			});
			stmt.finalize();
		});
		
		db.close();

	});
}).listen(8080);
