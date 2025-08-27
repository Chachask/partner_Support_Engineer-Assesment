# partner_Support_Engineer-Assesment
docker-compose.yml rectified the indentation 
changed the image from postgres:alpine-arm64  to postgres:15-alpine 
changed depend_on to depends_on



package.json 
launched the web server by adding 
 "scripts": {
    "serve": "node index.js"
  }
  checked for active ports 
   "scripts": {
    "serve": "node index.js"
  }

  run docker-compose up -d --build
  to build all images and start all services
