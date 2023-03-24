
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAjrHrssssJf1CHpnT6Xi9TR46-Qqg-Xfs",
      authDomain: "cccccccccccccccccclllllkkkkkkk.firebaseapp.com",
      projectId: "cccccccccccccccccclllllkkkkkkk",
      storageBucket: "cccccccccccccccccclllllkkkkkkk.appspot.com",
      messagingSenderId: "3034939053",
      appId: "1:3034939053:web:15762e5c6a7a7e9b269024"
    };
// Initialize Firebase    
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location.replace("kwitter_page.html")
}

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      childData = childSnapshot.val();
      
      

if(childKey != "purpose"){
      firebase_message_id = childKey; 
      message_data = childData;
      console.log(firebase_message_id); 
      console.log(message_data); 
      name = message_data['name']; 
      message = message_data['message']; 
      like = message_data['like']; 
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>"; 
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"; 
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"; 
      row = name_with_tag + message_with_tag + like_button + span_with_tag; 
      document.getElementById("output").innerHTML += row;
      
}
      //Final del código
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      windowl.location.replace("index.html");
}

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}
