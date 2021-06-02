// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxBtRRyZb7dXdGIUqKyMzlSqY5HcTn2FI",
    authDomain: "kwitter-d5ad1.firebaseapp.com",
    databaseURL: "https://kwitter-d5ad1-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5ad1",
    storageBucket: "kwitter-d5ad1.appspot.com",
    messagingSenderId: "334646613478",
    appId: "1:334646613478:web:b1ba348c004ff305e0b227"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  
  function addRoom()
      {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update(
              {
                    purpose: "Adding Room Name"
              });
              localStorage.setItem("room_name", room_name);
              window.location = "kwitter_page.html";
      }
  
      function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
   Room_names = childKey;
   //Start code
      console.log ("Room Name - " + Room_names);
        row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
   //End code
   });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }