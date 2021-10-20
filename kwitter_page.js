const firebaseConfig = {
      apiKey: "AIzaSyCIjShu0jnIgDdQC9AFvqct5QKeVT6ygTA",
      authDomain: "kwitter-95bf4.firebaseapp.com",
      databaseURL: "https://kwitter-95bf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-95bf4",
      storageBucket: "kwitter-95bf4.appspot.com",
      messagingSenderId: "704669394139",
      appId: "1:704669394139:web:8b9469f36cb66d38be98fe",
      measurementId: "G-TYHRCZJJBS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
userName=localStorage.getItem("userName");
roomName=localStorage.getItem("roomName");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
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
