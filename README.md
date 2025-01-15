# Cybernauts_Task
Backend Implementation (API)

Objective:
1. Follows the MVC design pattern and industry standards.
2. Implemented endpoints api/ with all CRUD operations:

   -> GET  api/users - get all users (200)
   
   -> POST  api/create - create new user (201, 400)
   
   -> PUT  api/update/{userId} - update user (200, 400, 404)
   
   -> DELETE  api/delete/{userId} - delete user (204, 400, 404)

4. User Model:
id - unique identifier (string, uuid) generated on the server side
username - user's name (string, required)
age - user's age (number, required)
hobbies - user's hobbies (array of strings or empty array, required)

5. Handle non-existing endpoints (404) .
6. Implemented proper error handling (500) .
7. Used .env for configuration (eg. PORT, MONGODB_URL) .
8. Set Up Environment Variables.
9. Tested all the api requests using POSTMAN .
