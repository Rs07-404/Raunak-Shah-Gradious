Folder name 'client' has the frontend code(ReactJS).
Folder name 'server' has the backend code(NodeJS + ExpressJS)
Database: MongoDB

1. Go to server folder and execute the below commands:
	a. npm i
	b. Open the config file and update the credentials of your database if required (server/config/config.env)
	c. npm start
	Note: Your server will run with 5000 port as mentioned in the config file
	
2. Go to client folder and execute the below commands:
	a. npm i
	b. npm start
	It will run the ReactJS project with the port number 3000.
	Hit http://localhost:3000/ in the browser.
