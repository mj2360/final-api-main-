const express = require('express'); 
 
const router = express.Router(); 

const firestore =  require("firebase/firestore/lite");
const db = firestore.getFirestore();

const storage = require('firebase/storage');
const store = storage.getStorage();
//const storageRef = (store, 'canvas');



router.get("/submit", (request, response) => { 

    const queryParams = request.query; 
    const {imageAlt, imageSrc, text, postId, userId, userName} = queryParams;
    //upload image function here using firebase storage 

    // 'file' comes from the Blob or File API
    uploadBytes(Storage, file).then((setCanvasPost) => {
      setCanvasPost = firestore.addDoc(
        firestore.collection(db, "canvas"),
        {
            imageAlt, 
            imageSrc, 
            text, 
            postId, 
            userId, 
            userName
        }
      );

      setCanvasPost
      .then((response) => {
        response.send();
      })
      .catch((error) => response.send(error));

    console.log();

    response.send("?");

    });

})
module.exports = router; 