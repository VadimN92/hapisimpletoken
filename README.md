-install all packeges
nmp i

-run server 
node server.js

postman

method:POST (can work with all methods)
headers: token: 1234 => return success, 
	token: 123445645 => return {
	  "statusCode": 401,
	  "error": "Unauthorized",
	  "message": "invalid token"
	}

