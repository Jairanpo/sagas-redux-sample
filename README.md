# React Redux App

This app is intended to work with docker, the requirements
are:
- Docker installed with docker compose
- Availability at port 8080 to bind the app

# How it works?:
It is a simple setup with NGINX taking control of the
routing.
Any request to port http://localhost:8080/ will try to 
reach the client application.
Requests to the route `/api` would be routed to the 
server. Each service is build with its own Dockerfile.

# Backend
The backend is build with apollo server and only supports a
simple query to reconstruct a URL we can use from the
client.

# Client
Is build with typescript, React and styled-componnets.

# To Run:
You can use the Makefile commands attached.
simply run:
```
make dev-env
```
or simply use
```
docker compose up --build
```
From there you can just access the 
