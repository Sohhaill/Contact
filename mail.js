const firebaseConfig = {
  apiKey: "AIzaSyAWAP7NTXcdmlblGNYwqQLiIUdQUCORcTU",
  authDomain: "instagram-e65c0.firebaseapp.com",
  databaseURL: "https://instagram-e65c0-default-rtdb.firebaseio.com",
  projectId: "instagram-e65c0",
  storageBucket: "instagram-e65c0.firebasestorage.app",
  messagingSenderId: "922966696321",
  appId: "1:922966696321:web:7cefaff9642d390a9c0880"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
