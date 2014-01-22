var currentUser = null;

var login = function(email){
  currentUser = email;
};

var logout = function(){
  currentUser = null;
};

// Current User before login is invoked:    console.log("Current User before login is invoked:  ", currentUser); returns null


var getLoggedInUser = function(){
  getUserDetails(currentUser, function(result){
    
    //print out friends list
    if (result !== null){
      var output = '';
      for(var id in result.friends){
        output += id + ', ';
      }
      console.log(result);
      console.log(output);
      
    }else{
      console.log("Not logged in.");
    }
  });
};
login('john@doe.com');
//console.log(currentUser);
getLoggedInUser();
logout();
getLoggedInUser();




/*********************************/
/** DO NOT EDIT BELOW THIS LINE **/
/*********************************/

/**
 * MOCK - get user details
 * @param  {string} email
 * @return {void}
*/



function getUserDetails(email, callback){
  if(email){
    callback({
      email: email,
      username: 'John Doe',
      friends: [0,1,2,3]
    });
  } else {
    callback(null);
  }
}