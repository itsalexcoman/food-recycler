#!/usr/bin/env bash

SQL=`python ./docs/dev-tools/.sqlGenerator.py ./backend/config/db.json`
touch ./docs/dev-tools/dbInit.sql
echo $SQL > ./docs/dev-tools/dbInit.sql
sudo mysql -u root < ./docs/dev-tools/dbInit.sql
rm ./docs/dev-tools/dbInit.sql

npm install
node ./docs/dev-tools/createdb.js
cd frontend && npm install