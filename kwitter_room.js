const firebaseConfig = {
      apiKey: "AIzaSyBB0Fjm45BfATA2ZFOH_Nf_MNxmXEBjjb8",
      authDomain: "kwitter-adv-94.firebaseapp.com",
      databaseURL: "https://kwitter-adv-94-default-rtdb.firebaseio.com",
      projectId: "kwitter-adv-94",
      storageBucket: "kwitter-adv-94.appspot.com",
      messagingSenderId: "868495181762",
      appId: "1:868495181762:web:605324ef539ac30907f85b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
document.getElementById("h3username").innerHTML="Welcome "+user_name+"!";
function add_room()
{
room_name=document.getElementById("room_name").value;
localStorage.setItem("roomnamekey",room_name);

firebase.database().ref("/").child(room_name).update({
      Ace : "AFK"
});
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - " + Room_names);
       row="<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'>" + "#" + Room_names + "</div> <hr>"; 
      //Start code
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name",name)
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("login_user");
      localStorage.removeItem("room name");
      window.location="kwitter.html";
}