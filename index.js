const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000; 

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyASne9seeS11fQ0b_1EemP50fJ-1LYa95s",
  authDomain: "main-final-projec.firebaseapp.com",
  projectId: "main-final-projec",
  storageBucket: "main-final-projec.appspot.com",
  messagingSenderId: "483974786610",
  appId: "1:483974786610:web:4b2ae00e3f4fc259a9d62b"
};
  
  firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const createCanvasRoute = require ("./routes/createCanvasPost");
const canvasRoute = require ('./routes/canvas'); 

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    // Pass to next layer of middleware
    next();
  });


app.use("/", indexRoute);
app.use("/create", createCanvasRoute);
app.use("/canvas", canvasRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

