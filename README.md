# **Basic project information**

## Project Description:
My project has the idea of finding a common sphere of interests with other people and subsequently developing it.
On this website, you will be able to both find a team for collaborative development of a certain task and create this team yourself.
The platform plans to provide opportunities not only for finding specialists but also for various other features:
1. Internal communication
2. Creating your own profile
3. ?
4. ?
Initially, the project is considered as a training ground for learning React and gaining knowledge of the basics of the backend.

## **Technologies:** 
(Frontend)
- React
- Material UI
- Scss

(Backend)
- Node.js
- Express.js
- MySQL
- Sequelize
- JSON Web Token
- bcrypt

## **Installation:**
To install, you will need to clone the repository and use a package manager to install any library from the project separately in the frontend and backend folders, for example:
*path\frontend>* `npm install react-router-dom`
*path\backend>* `npm install express`
After such manipulations, the package manager will automatically install everything necessary for the project.

# **Configuration:**
In the backend folder, there is a configuration file .env. For security reasons, I haven't added this file to the repository, but you can obviously create it yourself.
-In the backend folder, create a file .env with the following variables:

`JWT_SECRET="unique key for JSON WEB TOKEN"`
`PORT=3001 (will soon have a flexible value, currently listens only to 3001)`

# **Project Launch:**
To launch the project, you need to have Node downloaded on your computer. If so, separately start on two consoles:
In the frontend folder: `npm start`
In the backend folder: `node server/server.js`

Why is the path in the backend folder specifically server/server.js?
This is necessary for the configuration file (.env) to be read, so it has to be like that :)

# **Contacts:**
miragela.code@gmail.com
or
rozhkovskyi2022@ukr.net