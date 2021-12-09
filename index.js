const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000; 

const firebase = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyAmqFZhbui5qub6nxGDlcQ4c1yFqfYUTe4",
    authDomain: "final-project-3f86e.firebaseapp.com",
    projectId: "final-project-3f86e",
    storageBucket: "final-project-3f86e.appspot.com",
    messagingSenderId: "103299965308",
    appId: "1:103299965308:web:acd37e49c35152ab0d84f9"
  };
  
  firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const createCanvasRoute = require ("./routes/createCanvasPost")



app.use("/", indexRoute);
app.use("/create", createCanvasRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });