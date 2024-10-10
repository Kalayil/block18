// -------------------- Unit Tests --------------------

// Testing multiplication function
// Expect multiplication(2, 3) to give 6
function testMultiplication1() {
    let result = multiplication(2, 3);
    if (result == 6) {
      console.log("Test passed: multiplication(2, 3) = 6");
    } else {
      console.log("Test failed: multiplication(2, 3) should be 6");
    }
  }
  
  // Expect multiplication(-2, 3) to give -6
  function testMultiplication2() {
    let result = multiplication(-2, 3);
    if (result == -6) {
      console.log("Test passed: multiplication(-2, 3) = -6");
    } else {
      console.log("Test failed: multiplication(-2, 3) should be -6");
    }
  }
  
  // Expect multiplication(2, 0) to give 0
  function testMultiplication3() {
    let result = multiplication(2, 0);
    if (result == 0) {
      console.log("Test passed: multiplication(2, 0) = 0");
    } else {
      console.log("Test failed: multiplication(2, 0) should be 0");
    }
  }
  
  // Expect multiplication(2, 'a') to give an error
  function testMultiplication4() {
    try {
      multiplication(2, 'a');
      console.log("Test failed: multiplication(2, 'a') should throw an error");
    } catch (e) {
      console.log("Test passed: multiplication(2, 'a') threw an error");
    }
  }
  
  // -------------------- concatOdds Tests --------------------
  
  // Expect concatOdds([3, 2], [1]) to return [1, 3]
  function testConcatOdds1() {
    let result = concatOdds([3, 2], [1]);
    if (result.toString() == [1, 3].toString()) {
      console.log("Test passed: concatOdds([3, 2], [1]) = [1, 3]");
    } else {
      console.log("Test failed: concatOdds([3, 2], [1]) should be [1, 3]");
    }
  }
  
  // Expect concatOdds([1, 4], [5, -1]) to return [-1, 1, 5]
  function testConcatOdds2() {
    let result = concatOdds([1, 4], [5, -1]);
    if (result.toString() == [-1, 1, 5].toString()) {
      console.log("Test passed: concatOdds([1, 4], [5, -1]) = [-1, 1, 5]");
    } else {
      console.log("Test failed: concatOdds([1, 4], [5, -1]) should be [-1, 1, 5]");
    }
  }
  
  // Expect concatOdds([2, 4], [6]) to return []
  function testConcatOdds3() {
    let result = concatOdds([2, 4], [6]);
    if (result.toString() == [].toString()) {
      console.log("Test passed: concatOdds([2, 4], [6]) = []");
    } else {
      console.log("Test failed: concatOdds([2, 4], [6]) should be []");
    }
  }
  
  // Expect concatOdds('invalid', [1, 3]) to throw an error
  function testConcatOdds4() {
    try {
      concatOdds('invalid', [1, 3]);
      console.log("Test failed: concatOdds('invalid', [1, 3]) should throw an error");
    } catch (e) {
      console.log("Test passed: concatOdds('invalid', [1, 3]) threw an error");
    }
  }
  
  // -------------------- Functional Tests --------------------
  
  // Expect login with no input to show an error
  function testLoginEmpty() {
    let result = logIn("", "");
    if (result == "Error: Please enter username and password") {
      console.log("Test passed: empty login shows error");
    } else {
      console.log("Test failed: empty login should show error");
    }
  }
  
  // Expect login with wrong password to show a password error
  function testLoginWrongPassword() {
    let result = logIn("user", "wrongpassword");
    if (result == "Error: Wrong password") {
      console.log("Test passed: wrong password shows error");
    } else {
      console.log("Test failed: wrong password should show error");
    }
  }
  
  // Expect login with correct details to go to dashboard
  function testLoginSuccess() {
    let result = logIn("user", "correctpassword");
    if (result == "Dashboard") {
      console.log("Test passed: correct login goes to dashboard");
    } else {
      console.log("Test failed: correct login should go to dashboard");
    }
  }
  
  // Expect creating an account with no input to show an error
  function testCreateAccountEmpty() {
    let result = createAccount("", "");
    if (result == "Error: Please enter email and password") {
      console.log("Test passed: empty account creation shows error");
    } else {
      console.log("Test failed: empty account creation should show error");
    }
  }
  
  // Expect sign up with Google to start Google authentication
  function testGoogleSignUp() {
    let result = signUpWithGoogle();
    if (result == "Google Authentication Process") {
      console.log("Test passed: Google sign up works");
    } else {
      console.log("Test failed: Google sign up should work");
    }
  }
  