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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //start code
    console.log("Room Name -" + Room_names);
    row = "<div class = 'room_name' id =" +Room_names+ "onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row; 
    //end code
   });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
  
    localStorage.setItem("room_name", room_name);

    window.location = "Whats.html";
}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}