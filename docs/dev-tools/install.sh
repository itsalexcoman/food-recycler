#!/usr/bin/env bash

SQL=`python ./docs/dev-tools/.sqlGenerator.py ./backend/config/db.json`
touch ./docs/dev-tools/dbInit.sql
echo $SQL > ./docs/dev-tools/dbInit.sql
sudo mysql -u root < ./docs/dev-tools/dbInit.sql
rm ./docs/dev-tools/dbInit.sql

IP=`curl ifconfig.me`
ENV=`python ./docs/dev-tools/.envGenerator.py $IP`
touch ./frontend/.env
echo $ENV > ./frontend/.env

npm install
node ./docs/dev-tools/createdb.js
cd frontend && npm install