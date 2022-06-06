// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAjJwxJHj2z9c0xsbw8srf8QTAMqkGQ-is",
    authDomain: "letschat-web-app-28394.firebaseapp.com",
    databaseURL: "https://letschat-web-app-28394-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-28394",
    storageBucket: "letschat-web-app-28394.appspot.com",
    messagingSenderId: "276043811854",
    appId: "1:276043811854:web:2cc7f5066d337a3a9a805f"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



