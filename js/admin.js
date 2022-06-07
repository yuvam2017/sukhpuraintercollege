

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      if (user){
        console.log("user logged in")
      } else {
        window.location.replace("./index.html")
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
