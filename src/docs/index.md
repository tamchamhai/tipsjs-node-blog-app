# Project Name: Learn NodeJS By Create A Blog App 

## Overview
This project aim to develop my BE skills. It uses Nodejs, Express, MongoDB.

## Folder Structure
Explain the organization of the project's folders and files.

/project-root
|-- /src
|   |-- /configs
|   |   |-- [configs files]
|   |
|   |-- /controllers
|   |   |-- [Controller files]
|   |
|   |-- /dbs
|   |   |-- init.mongodb.js
|   |   |-- init.mongodb.lv0.js
|   |
|   |-- /docs
|   |   |-- index.md
|   |
|   |-- /helpers
|   |   |-- check.connect.js
|   |
|   |-- /models
|   |   |-- [Model files]
|   |
|   |-- /services
|   |   |-- [services files]
|   |
|   |-- /utils
|   |   |-- app.js
|   |   |-- .env
|
|-- .gitignore
|-- .prettierrc
|-- package-lock.json
|-- package.json
|-- server.js
|-- ...



## Controllers
Explain the purpose of controllers and how they handle incoming requests.

- **[Controller Name 1]**
  - [Description]
  - [Usage]
- **[Controller Name 2]**
  - [Description]
  - [Usage]
- ...

## Models
Describe what models are, and how they interact with the database.

- **[Model Name 1]**
  - [Description]
  - [Usage]
- **[Model Name 2]**
  - [Description]
  - [Usage]
- ...

## Helpers
Explain how routes are defined and how they connect controllers to incoming requests.

- **[Route Name 1]**
  - [Description]
  - [Usage]
- ...

## DBs
This folder contain all config for db.
- **init.mongodb.js**
  - Description: This file describe how to config to connect to db use Singleton pattern to ensure that only one instance of the Database class is created. Prevent make too much connection to DB can cause to crash DB. 
  - [Usage]
- ...

## Routes
Explain how routes are defined and how they connect controllers to incoming requests.

- **[Route Name 1]**
  - [Description]
  - [Usage]
- **[Route Name 2]**
  - [Description]
  - [Usage]
- ...

## Middlewares
Describe the purpose of middlewares and how they can be used in request/response handling.
- **[Middleware Name 1]**
  - [Description]
  - [Usage]
- **[Middleware Name 2]**
  - [Description]
  - [Usage]
- ...

## Utils
Describe the purpose of middlewares and how they can be used in request/response handling.
- **constants.js**
  - Description: Contain all constant variable in project.
- ...

## Configuration Files
Explain important configuration files and how they are used.

- **`database.js`**: [Description]
- **`config.js`**: [Description]
- ...

## Additional Scripts
Provide information about any custom scripts that are included in the project.

- **[Script Name 1]**
  - [Description]
  - [Usage]
- **[Script Name 2]**
  - [Description]
  - [Usage]
- ...

## Git commit format

## server.js
- This file contain listen port to start server, listening signals.


## Testing
Briefly mention how testing is handled and where test files are located.

## Dependencies
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Express**: Web application framework for Node.js.

## Getting Started
Provide instructions on how to set up and run the project locally.

## Usage Examples
Give some code snippets or examples demonstrating how to use different components of the backend.

## Version History
Keep track of changes and updates to the project.
