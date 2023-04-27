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
<img width="1094" alt="Screen Shot 2023-04-26 at 7 55 49 PM" src="https://user-images.githubusercontent.com/79222117/234749489-743d02cd-e488-449d-a49c-52d834a68ce0.png">
<img width="1091" alt="Screen Shot 2023-04-26 at 7 57 15 PM" src="https://user-images.githubusercontent.com/79222117/234749498-3a6e8264-12f7-4c4d-ab8c-1ee9f1270b39.png">
<img width="920" alt="Screen Shot 2023-04-26 at 8 02 37 PM" src="https://user-images.githubusercontent.com/79222117/234749504-e3fa35fe-d86e-40c8-8e4e-2f20a4be1aca.png">
<img width="1022" alt="Screen Shot 2023-04-26 at 8 03 13 PM" src="https://user-images.githubusercontent.com/79222117/234749519-72442047-b28b-4629-90dc-1bb46376b77e.png">
<img width="1089" alt="Screen Shot 2023-04-26 at 8 04 06 PM" src="https://user-images.githubusercontent.com/79222117/234749527-5ad2f344-b420-4086-b13f-715c535aa4f8.png">
