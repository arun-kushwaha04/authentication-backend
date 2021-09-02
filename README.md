# authentication-backend
Backend designed for Authentication using MongoDB and Nodejs.

## Routes
**/auth/signUp**
- Accepts name, email and password then creates a user entry in the database. Password is hashed before adding to database.<br> 

**/auth/signIn**
- Accepts email and password. Returns a JWT token on successful sing in and throw an error on unsuccessful attempt.<br>

**/home**
- Accpepts JWT token as bearer token in header auth and responds with success on validation.

## Installation
> Clone the repo in your system.<br>
> Run *npm install*.<br>
> Create a .env file having DB_URL and SECRET_KEY.<br>
> Now you can run 'npm run dev' and sever start running at port 8000.

## Tech Stack and Libraries Used
- [Node Js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

Hosted on [Heroku](https://fast-cliffs-88077.herokuapp.com/)<br>
**Found it useful, give it a star**


