import "./App.css";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/Login";
import { Button } from "@ui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
+++++++++++++++++++APPLICATION PAGES++++++++++++++++++++++++++++

---------------- login screen --------------------
- Needs the email + password fields
- Needs gmail login/signup on click
- Needs forgot password link


---------------- Forgot Password Page ----------------
- Asks for email, then sends a link to create a new password


---------------- After successfull account creation ------------------
- Page that asks for name and biography
- Redirect to blog post screen after success

----------------- Chat Room ---------------------
- Screen with a feed of posts that are from everyone
- Newest posts appear at the bottom - oldest at the top
- Max character length of 250 chars
- Can add emojis
- Only allow certain amount of posts to be retrieved at a time - pagination
- You will need to scroll to the top in order to send a request for older posts

--------------- Navbar -----------------
- Redirects you to your profile + Posts screen
- Navbar will change depending if it's mobile view or not

---------------- Account Screen -----------------
- This is the place where you can edit your account information
- You can delete your account here => this will delete all data related to account and redirect to login screen
- You can add a picture that will display next to your message in the chat room
- Change the color of your text that appear in the chat room

==== components ===
- Profile picture container => contains profile picture - clickable - opens file storage to add new picture
- account info bars => displays account info + clickable 


+++++++++++++ Global Components +++++++++++
------------------ Card ------------------
- This will serve as a border/background for input fields like login/forgot pass/account info
- Will wrap around other components/jsx 
- All components/jsx inside of this will be displayed inside of the card's borders

------------------ Button ----------------
- This component should take in props to be customizable
- Needs default syles that can be changed
- Props it should take in: "color": changes body color, "borderAndText": changes border and text color, "styles": adds an external class to the entire thing

------------------ Toasts -------------------
- Toasts should appear after successfull updates to the user's account information
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
