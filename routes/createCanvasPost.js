const express = require('express'); 
 
const router = express.Router(); 

const firestore =  require("firebase/firestore/lite");
const db = firestore.getFirestore();


router.get("/", (req, res) => { 
    const queryParams = req.query; 
    const {imageAlt, imageSrc, text, userId} = queryParams;

      const setCanvasPost = firestore.addDoc(
        firestore.collection(db, "canvases"),
        {
            imageAlt, 
            imageSrc, 
            text, 
            userId, 
        }
      );

      setCanvasPost.then((response) => {
        res.send(response);
      })
      .catch((error) => res.send(error));
    })
module.exports = router; 