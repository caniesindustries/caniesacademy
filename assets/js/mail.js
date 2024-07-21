const firebaseConfig = {
    apiKey: "AIzaSyChJQNnPPkM9oxfVIo62Vm7y4kfNZpd_QE",
    authDomain: "caniesacademy-1a04c.firebaseapp.com",
    databaseURL: "https://caniesacademy-1a04c-default-rtdb.firebaseio.com",
    projectId: "caniesacademy-1a04c",
    storageBucket: "caniesacademy-1a04c.appspot.com",
    messagingSenderId: "341597881490",
    appId: "1:341597881490:web:3a93c0419b936f14bd124b",
    measurementId: "G-NMQVM7YTDZ"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactformDB = firebase.database().ref("caniesacademy");

document.getElementById('contactForm').addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("nam");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("msgContent");

    saveMessages(nam, email, msgContent);
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactformDB.push();
        
    newContactForm.set({ 
        name : nam,
        emailid : email,
        msgContent : msgContent,
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).values;
};