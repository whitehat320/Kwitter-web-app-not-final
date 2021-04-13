
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig= {
      apiKey : "AIzaSyDcBsU2YivLmoangS-V9AU0b25_15BXQkg",
      authDomain: "kwitter-app-5dabb.firebaseapp.com",
      databaseURL: "https://kwitter-app-5dabb.firebaseio.com",
      projectId: "kwitter-app-5dabb",
      storageBucket: "kwitter-app-5dabb.appspot.com",
      messagingSenderId: "391421367212",
      appId: "1:391421367212:web:c17a1ad71faaa22a22a009"
      };
      firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    console.log("user_name -" + user_name);
   document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";
   
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name -" + room_names);
      row="<div class='room_name'id="+room_names+"onclick='redirectToRoomName(this.id)'>#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name,name");
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
