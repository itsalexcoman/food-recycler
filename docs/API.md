# Food Recycler API

## Short description
Food Recycler implements a RESTful API that uses HTTP requests to GET, PUT, POST and DELETE data. REST technology uses little bandwidth, making it suitable for internet usage – therefore, using a RESTful API makes data manipulation a lot easier.

## Database design
We've chosen MySQL for our app for a couple of reasons:
1. the fact that it's designed and optimized for Web applications
2. its exceptional performance and scalability

We then began the database design process, which resulted in a simple, but effective database schema:
![](https://raw.githubusercontent.com/itsalexcoman/food-recycler/master/docs/images/api/db.png)

## Endpoints
These are the endpoints that can be used for interaction with the aforementioned database:
#### GET (Read)
```
GET /users
GET /users/:id
GET /users/:id/products

GET /products/:id

GET /groups
GET /groups/:id
GET /groups/:id/users
GET /groups/:id/products
```
#### POST (Create)
```
POST /users
POST /products
POST /groups
POST /groups/:id/users
```
#### PUT (Update)
```
PUT /users/:id
PUT /products/:id
PUT /groups/:id
```
#### DELETE
```
DELETE /users/:id
DELETE /products/:id
DELETE /groups/:id
DELETE /groups/:id/users/:id
```