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
  room_name=localStorage.getItem("room name");
  function Send(){
      msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0

    });





document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "Ralph") { firebase_message_id = childKey; message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  user_name=message_data["name"];
  message=message_data["message"];
likes=message_data["likes"]
name_with_tag="<h4>" + user_name + "<img src='tick.png' class='user_tick'> </h4>";
message_with_tag ="<h4 class='message_h4'>" + message + "</h4> <br>" ;
like_button ="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + " onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: " + likes + "</span></button" + "<hr>";
row= name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


} }); }); } getData();
function updateLike(message_id)
{
    console.log("clicked on like button and msg id - " + message_id);
    old_likes = document.getElementById(message_id).value;
    update_likes = Number(old_likes) + 1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
        likes : update_likes
    }); 
}
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room name");
      window.location="kwitter.html";
      
  }