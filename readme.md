# Task Management Application

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#user-apis">User Apis</a></li>
      </ul>
      <ul>
        <li><a href="#task-apis">Task Apis</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a>
            <ul><li><a href="#local-database-setup">Local Database Setup</a></ul></li>
            <ul><li><a href="#npm-module-installation">NPM Module Installation</a></ul></li>
            <ul><li><a href="#env-file">ENV File</a></ul></li>
        </li>
      </ul>
    </li>
    <li><a href="#postman-collection">Postman Collection</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Task Management Application is a backed service which provides a user to track his office/personal tasks.
here are some of the features/apis of the taskManagementApplication.

### **The service uses JWT tokens for authentication of Apis**

- #### User Apis:

  - Api to add(create) new users
  - Api to fetch all the users in system.
  - Api to search the user with id, firstName and lastName.
  - Api to sort the user with id, createdAt and updatedAt in 'ASC' or 'DESC' order.

- ### Task Apis:
  - Api to create a new task with title, descption and assgin it to user.
  - Api to fetch all the tasks in system.
  - Api to search for task with id, title, userId, and status.
  - Api to sort task with id, createdAt, updatedAt in 'ASC' or 'DESC' order.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The following commands starts the server.

```sh
npm run dev
```

### Prerequisites

- #### Local Database Setup

  ```sh
  psql postgres --u postgres
  ```

  ```sh
  postgres-# CREATE ROLE admin WITH LOGIN PASSWORD 'admin123';
  postgres-# ALTER ROLE admin CREATEDB;
  postgres-# \q
  <!-- login as a new user admin -->
  psql postgres -U admin
  CREATE DATABASE task_management
  GRANT ALL PRIVILEGES ON DATABASE task_management TO admin

  ```

- #### npm module installation

  ```sh
  npm install
  ```

- #### Env File
  You can use the below file a sample .env for getting started with the project.
  ```sh
  ENV=development
  PORT= 3090
  DB_URL=127.0.0.1
  DB_USERNAME=admin
  DB_PASSWORD=admin123
  DB_DATABASENAME=task_management
  ACCESS_TOKEN_SECRET=3a4952f095c22d3bedceb7c6c3a37b90618feae22a5db6722f04921e1975841e4befd4035231ac8b93325e78feb9562b812de98608548651186375dfae1dc62f
  REFRESH_TOKEN_SECRET=3d4e32f8d09b91790d34ae4e20648218522cf4d5133e9a540bc3b09ce2ddbbe7401d101710bff53f8c4e837503aad3065f0447fc6dfb035b3afbba7b21c0ebd5
  ```

<!-- Postman Collection -->

## Postman Collection

Postman collection link - [@postman-link](https://djay-m.github.io/resume/)

## Contact

Dhananjaya.M - [@my_website](https://elements.getpostman.com/redirect?entityId=33121059-44362fbd-84ab-46e9-ba80-ad911b366bf7&entityType=collection)

Project Link: [https://github.com/Djay-M/taskManagementApplication/tree/main](https://github.com/Djay-M/taskManagementApplication/tree/main)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
