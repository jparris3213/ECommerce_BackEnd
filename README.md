# ORM E-Commerce Back-End

## Description

This application is a SQL database backend, using Sequalize to handle routing and CRUD operations. While this is not deployed on a site, it is able to be ran on your own computer under the following conditions:

- Node.js and basic knowledge
- mySQL
- Insomnia or similar application for interacting with CRUD Routes

Example of application in action here:
[Youtube Example](https://youtu.be/KbOw2eIFujY)

## Table of Contents

|[Installation](#installation)|
[Usage](#usage)|
[Contributing](#contributions)|
[License](#license)|
[Questions](#questions)|

## Installation

          If you are attempting to run this locally, you will need to use the following commands after cloning the repo:

          -mysql -u <username> -p
          - <whatever your password for your SQL database is locally>
          -source db/schema.sql
          -exit
          -npm install
          -node seeds/index.js
          and finally:
          node server.js       -npm i
          -node server.js

          Once server is running locally, you can use basic CRUD operations to interact with server through an application such as Insominia

## Usage

          Basic CRUD routes: GET, PUT, DELETE, and POST are all available for the following routes:

          /api/tags
          /api/products
          /api/categories

## Contributions

          Not much to contribute but if you would like to send a pull request, please feel free, basic considerations of form and format please. Base code provided by UNC Bootcamp

## License

      If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Questions

      If you have any questions, please feel free to reach out to me here.
