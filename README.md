# README
- This is a simple app that utilizes a registration page, login page, and a settings page. 
- This is built with a React frontend, and Rails API.
- This is not an all encompasing application, just something that I built in my free time. 

# How to Start
- Enter the application's main directory and start the rails server. After starting the rails server, cd into 'frontend' before running 'npm run dev'.
- rails s - starts rails server
- npm run dev - starts vite app

- backend runs on port 3000
- frontend runs on port 5173

- brew services start mysql - starts the mysql server with homebrew
- brew services stop mysql - stops the mysql server with homebrew

# Use This URL to Interact With the Frontend
- http://localhost:5173/login

# What Versions You'll Need
- Ruby version: 3.1.3
- Rails version: 7.0.4.3

# Known Bugs
- The jwt system currently does not refresh tokens properly. You must clear your local storage after your token expires, then log back in to resume using the app.
- You can also just hit 'logout' after your session expires to clear the local storage for you - this will redirect you to the login page.
