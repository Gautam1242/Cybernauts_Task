# Cybernauts_Task
Backend Implementation (API)

1. Implemented endpoint api/ with all CRUD operations:
   GET  api/users - get all users (200)
   POST  api/create - create new user (201, 400)
   PUT  api/update/{userId} - update user (200, 400, 404)
   DELETE  api/delete/{userId} - delete user (204, 400, 404)

2. User Model:
id - unique identifier (string, uuid) generated on the server side
username - user's name (string, required)
age - user's age (number, required)
hobbies - user's hobbies (array of strings or empty array, required)

3. Implemented proper error handling (500) .
4. Used .env for configuration (eg. PORT, MONGODB_URL) .
