# Concerts Database API&nbsp;🎸

### Introduction

API was designed and developed to enhance the functionality of "Concerts Database", a web application dedicated to preserving memories of concerts attended. By seamlessly integrating with the platform, this API empowers Concerts Database to deliver dynamic content and interactive features.

### Installation Guide

- Clone this repository.
- Run npm install to install all dependencies
- Create a .env file in your project root folder and add variables. See .env.sample for assistance.

### Usage

- Run **npm run dev** to start the application.
- Connect to the API using Postman or Insomnia on local port **4000**.
- The API is also deployed at **https://concert-database-api.onrender.com/** — GET endpoints (e.g. `/concerts/all`) can be viewed directly in a browser; POST/PUT/DELETE still require a tool like Postman or Insomnia.

### API Endpoints

| HTTP Methods | Endpoints            | Action                                     |
| ------------ | -------------------- | ------------------------------------------ |
| **GET**      | /concerts/all        | _To retrieve all concerts on the platform_ |
| **GET**      | /concerts/:id        | _To retrieve details of a single concert_  |
| **POST**     | /concerts/add        | _To create a new concert_                  |
| **PUT**      | /concerts/edit/:id   | _To edit the details of a single concert_  |
| **DELETE**   | /concerts/delete/:id | _To delete a single concert_               |

### Example Request Body (POST /concerts/add & PUT /concerts/edit/:id)

```json
{
  "tour": "Music Of The Spheres World Tour",
  "artist": "Coldplay",
  "year": 2023,
  "city": "São Paulo",
  "country": "Brazil",
  "rating": 5
}
```

### Example Response

```json
{
  "_id": "6598f1a2b3c4d5e6f7a8b9c0",
  "tour": "Music Of The Spheres World Tour",
  "artist": "Coldplay",
  "year": 2023,
  "city": "São Paulo",
  "country": "Brazil",
  "rating": 5,
  "createdAt": "2023-12-31T12:00:00.000Z",
  "updatedAt": "2023-12-31T12:00:00.000Z"
}
```

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for the installation and management of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open-source NoSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straightforward, schema-based solution to model application data.

### Authors

- [Tulio Minini](https://tuliominini.com/)
