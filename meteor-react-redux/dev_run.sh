#!/bin/bash
MP=${MONGO_PORT:-27017}
DB=meteor

export MONGO_URL=mongodb://127.0.0.1:$MP/$DB
export PORT=3000


echo "MONGO_URL is $MONGO_URL"
meteor run $1 --port $PORT
