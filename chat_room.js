
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

user_name= localStorage.getItem("user_name")
document.getElementById ("user_name").innerHTML="welcome "+user_name

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      }) ;
      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;

      //End code

      });});}
getData();
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}