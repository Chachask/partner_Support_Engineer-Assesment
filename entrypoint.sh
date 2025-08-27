#!/bin/bash
if [ -z "$DB_HOST" ]; then
  echo "DB_HOST not set"
  exit 1
  
fi
node index.js