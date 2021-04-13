//YOUR FIREBASE LINKS
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


      user_name = localStorage.getItem("user_name").value;
      room_name = localStorage.getItem("room_name").value;


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like']
name_with_tag="<h4>"+name+"<img class='user_trick'src='tick.png'></h4>";
messsage_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_buttuon="<button class='btn-btn-warning' id="+firebase_message_id+"value="+like+"oncliclk='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").ineerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}