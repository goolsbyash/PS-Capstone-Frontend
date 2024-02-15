# PS-Capstone Project

# Overview
BodyMorph is a full stack application that allows you to build custom workout plans.

Live link: 

Trello Board: https://trello.com/invite/b/0EQaLNEj/ATTI8489519119ba67a87db80846b2dc46e57A71D250/perscholas-capstone-project

This repo is connected to this repo for the backend: https://github.com/goolsbyash/PS-Capstone-Backend

# Acknowledgments

This project is a portion of the work that I have completed during the 15 week sofwtare engineering cohort at Perscholas. A special shoutout to my Perscholas instructors Abraham Taravez and Colton Wright. They have taught me many lessons over the past three months and I cannot wait to continue advancing my skills. Thank you Abe and Colton!

# Technologies Used
- MERN (MongoDB, Express.js, React, Node.js)
- Mongoose
- Mongoose Bcrypt for password hashing during account creation
- Third party API: https://wger.de/en/software/api

# Usage
- Create account
- Signin upon creating account
- Log out of account
- Build and save custom workout plan
- Delete account + saved plans
- View active and saved plans


# Backend Routes

# Users
- GET /:id    Read specific user's data
- PATCH /:id/update    Update user's name and email
- POST /signin     (BLOCKED/TODO)
- POST /signup    Create new user with hashed password
- DELETE /:id/delete    Delete specifc user account

# Exercises
- POST /     Create new exercise plan
- GET /owner/:id     Read all plans for specific user
- DELETE /owner/:id    Delete all plans by owner id
- GET /active/:id     GET active plan by owner id
- POST /:id       Update name of specific plan (not in frontend just yet)

# Blockers
- Password verification using mongoose-bcrypt
- Need better API for exercise data such as ExerciseDB
- Account update requires refresh to render updates
- Dashboard needs refresh to render plans after adding new plan
  

# Future Implementations
- Delete plans (route available but needs to be added to frontend)
- User Authentication for signin
- Replace current API with ExerciseDB to add images and more info
- Render view to update exercises + reps/sets
- Add BMI calculator
- Render exercises + reps/sets for active plan
- Currents Stats section for tracking weight and completion of workout