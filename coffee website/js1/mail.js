const firebaseConfig = {
    apiKey: "AIzaSyAQ6tYxufkB1CVxeKLNVJSNW5hh34y8tsc",
    authDomain: "coffee-project-2f82d.firebaseapp.com",
    databaseURL: "https://coffee-project-2f82d-default-rtdb.firebaseio.com",
    projectId: "coffee-project-2f82d",
    storageBucket: "coffee-project-2f82d.appspot.com",
    messagingSenderId: "762579931878",
    appId: "1:762579931878:web:3d5797dad366efb3a22127"
  };



firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var password = getElementVal("password")
  

  saveMessages(name, emailid,password );

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    password:password,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};