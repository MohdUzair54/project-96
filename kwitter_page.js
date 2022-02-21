var firebaseConfig = {
    apiKey: "AIzaSyDChpkrR3FfRsQjl1oMfkQKp7RFog8kNyM",
    authDomain: "kwitter-app-591ed.firebaseapp.com",
    databaseURL: "https://kwitter-app-591ed-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-591ed",
    storageBucket: "kwitter-app-591ed.appspot.com",
    messagingSenderId: "157542342362",
    appId: "1:157542342362:web:1595e8c9157c9d62c08fe3",
    measurementId: "G-1Z3QX9E8WS"
  };
  firebase. initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
