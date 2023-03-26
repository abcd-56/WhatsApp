const firebaseConfig = {
    apiKey: "AIzaSyDj3cIVojOxxbLx9VNfQey1c6ZvYy0sEKA",
    authDomain: "whatsapp-de06f.firebaseapp.com",
    databaseURL: "https://whatsapp-de06f-default-rtdb.firebaseio.com",
    projectId: "whatsapp-de06f",
    storageBucket: "whatsapp-de06f.appspot.com",
    messagingSenderId: "785618844007",
    appId: "1:785618844007:web:26ef03e02c7f7e69f797c2"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot){ 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
name_with_tag = "<h4> "+ name +"<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}