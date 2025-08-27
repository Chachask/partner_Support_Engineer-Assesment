# partner_Support_Engineer-Assesment
docker-compose.yml rectified the indentation 
image: postgres:15-alpine 
changed depend_on to depends_on
key commands : 
              : docker compose down
              : docker compose up -d --build
              Builds all images and starts the services in detached mode.
              Ensures updated configurations take effect.

              : docker ps -a 
              lists all containers running, exited, restarting, crashed
              : docker logs db-service  
                -Displays logs for the PostgreSQL container.
              : docker logs web-app-service
                -Displays logs for the Node.js web app container.
package.json 
launched the web server by adding 
 "scripts": {
    "serve": "node index.js"
  }
  checked for active ports gp port list
   "scripts": {
    "serve": "node index.js"
  }

index.js 
app.get('/', (req, res) => {
  res.send('Welcome! The app is running. Go to /health to check DB and internet connectivity');
});
verified that the server is running. listens for http get

ENTRY POINT.SH
checks if the db environment variable is missing

Set up Postgres (db-service), Node.js (web-app-service), and Nginx (proxy) in Docker Compose.
Validated communication between containers using service names.
Verified server routes and container logs for troubleshooting.