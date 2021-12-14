const express = require('express'); 
const router = express.Router(); 

const firestore = require("firebase/firestore/lite");

const db = firestore.getFirestore();

router.get("/", (req, res) => {
    const canvases = firestore.getDocs(firestore.collection(db, "canvases"));
  
    const canvasesArray = [];
  
    canvases
      .then((response) => {
        response.forEach((doc) => {
          const docData = doc.data(); 
          docData.id = doc.id; 
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