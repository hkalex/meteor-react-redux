if [ ! -n "$MONGO_URL" ] ;then
    docker exec -it mongodb mongo mongodb://127.0.0.1:27017/meteor /data/initData/customers.js
else
    docker exec -it mongodb mongo $MONGO_URL /data/initData/customers.js
fi
