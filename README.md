# partner_Support_Engineer-Assesment
The task was to set up and run a containerized application and verify that the services communicate correctly.
Postgres (db-service)
Node.js web app (web-app-service)
Nginx reverse proxy (proxy)

2. Steps Taken
Docker Compose Configuration
Rectified indentation issues.
Updated database image from postgres:alpine-arm64 to postgres:15-alpine for compatibility.
Changed depend_on → depends_on.

Key Commands Used:
docker compose down
➝ Stops and removes containers.
docker compose up -d --build
➝ Builds all images and starts the services in detached mode. Ensures updated configurations take effect.
docker ps -a
➝ Lists all containers (running, exited, restarting, crashed).
docker logs db-service
➝ Displays logs for the PostgreSQL container.
docker logs web-app-service
➝ Displays logs for the Node.js web app container.

Package.json
Added a start script to launch the web server:

"scripts": {
  "serve": "node index.js"
}


Verified active ports (e.g., gp port list).

Application Code (index.js)
Added a simple route to confirm the server is running:

app.get('/', (req, res) => {
  res.send('Welcome! The app is running. Go to /health to check DB and internet connectivity');
});


Verified the server responds on / and listens for HTTP GET requests.
Entrypoint Script (entrypoint.sh)

Added a startup check for reliability:

#!/bin/bash
if [ -z "$DB_HOST" ]; then
  echo "DB_HOST not set"
  exit 1
fi
node index.js
Ensures that the database environment variable is set before starting the application.
 console.log("DB_USER:", process.env.DB_USER);
 console.log("DB_HOST:", process.env.DB_HOST);
 console.log("DB_NAME:", process.env.DB_NAME);
 console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

Validation & Testing
Set up Postgres (db-service), Node.js (web-app-service), and Nginx (proxy) in Docker Compose.
Verified communication between containers using service names.
Checked server routes (/) and health endpoints.
Used container logs for troubleshooting and confirmation.

Outcome

All services were built and started successfully.
Node.js server confirmed running and accessible.
Database connectivity tested.
Nginx proxy verified to forward traffic to the web app.
used git commands to track changes.