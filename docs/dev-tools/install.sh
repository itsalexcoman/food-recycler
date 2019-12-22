#!/usr/bin/env bash
#
# This can be used to get variable values from config/db.json (for production)
#   USER=`cat ./backend/config/db.json | python -c 'import json,sys;obj=json.load(sys.stdin);print obj["username"]'`
#   PASS=`cat ./backend/config/db.json | python -c 'import json,sys;obj=json.load(sys.stdin);print obj["password"]'`
#   DB=`cat ./backend/config/db.json | python -c 'import json,sys;obj=json.load(sys.stdin);print obj["database"]'`

npm install
sudo mysql -u root < ./docs/dev-tools/dbInit.sql