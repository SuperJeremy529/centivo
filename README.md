User API

Overview

This project provides a simple API for managing users. You can retrieve
information about a specific user or fetch all users. The project is
containerized using Docker and can be easily set up and run with Docker
Compose.

Available Requests

Get All Users

Endpoint: GET http://localhost:3000/users

Description: Retrieves a list of all users.

Response Example:

\[ { "id": "67ec0f2e950cd6f1b7ff5894", "name": "John Doe", "email":
"johndoe@example.com" }, { "id": "123456789abcdef", "name": "Jane
Smith", "email": "janesmith@example.com" }\]

Get a Specific User

Endpoint: GET http://localhost:3000/users/{userId}

Example: GET http://localhost:3000/users/67ec0f2e950cd6f1b7ff5894

Description: Retrieves details of a specific user by their ID.

Response Example:

{ "id": "67ec0f2e950cd6f1b7ff5894", "name": "John Doe", "email":
"johndoe@example.com" }

Running the Project

To build and run the project using Docker Compose, use the following
command:

sudo docker compose up --build

This will:

Build the necessary Docker images.

Start the application along with any dependencies defined in the
docker-compose.yml file.

Once the application is running, you can access the API endpoints at
http://localhost:3000.

Notes

Ensure you have Docker and Docker Compose installed before running the
command.

If you make changes to the code, rerun the command to rebuild and apply
updates.
