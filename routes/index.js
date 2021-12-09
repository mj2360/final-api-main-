const express = require('express'); 
const router = express.Router(); 

const firestore = require("firebase/firestore/lite");

const db = firebase.getFirestore();

router.get("/", (req, res) => {
    const canvases = firestore.getDocs(firestore.collection(db, "canvas"));
  
    const canvasesArray = [];
  
    blogpost
      .then((response) => {
        response.forEach((doc) => {
          canvasesArray.push(doc.data());
        });
        return res.send(canvasesArray);
      })
      .catch(function (error) {
        console.log("Error:", error);
        return res.end(error);
      });
  });

module.exports = router; 