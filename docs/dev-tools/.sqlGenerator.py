import sys
import json

with open(sys.argv[1], 'r') as json_file:
    file = json.load(json_file)
    database = file["database"]
    username = file["username"]
    password = file["password"]
    hostname = file["hostname"]
    
print("drop user if exists 'fr_user'@'localhost';")
print("drop database if exists fr_database;")

print("drop user if exists '" + username + "'@'" + hostname + "';")
print("create user '" + username + "'@'" + hostname + "' identified by '" + password + "';")
print("drop database if exists " + database + ";")
print("create database " + database + ";")
print("grant all privileges on " + database + ".* to '" + username + "'@'" + hostname + "' with grant option;")