#!/usr/bin/env bash
echo -e "\e[1;32mWelcome to Food Recycler! \e[0m\n\nPlease enter your login password, followed by \e[1;33mthe password for the MySQL 'root' user\e[0m.\n"

SQL=`python ./docs/dev-tools/.sqlGenerator.py ./backend/config/db.json`
touch ./docs/dev-tools/dbInit.sql
echo $SQL > ./docs/dev-tools/dbInit.sql
sudo mysql -u root -p < ./docs/dev-tools/dbInit.sql
rm ./docs/dev-tools/dbInit.sql

IP=`curl -s ifconfig.me` && echo ''
ENV=`python ./docs/dev-tools/.envGenerator.py $IP`
touch ./frontend/.env
echo $ENV > ./frontend/.env

npm install
node ./docs/dev-tools/createdb.js
cd frontend && npm install