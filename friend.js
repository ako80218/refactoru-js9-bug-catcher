var currentUID = 0;
var width = 960;
var friendSpacing = 20;
//console.log(friendWidth);
var getFriendCount = function(uid){
  return 30;
};

var getPaginationPreferences = function(uid){
  var userDetails = {uid: uid, preferences: {pagination: 6}};
  return userDetails.preferences.pagination;
};
var paginationCount = getPaginationPreferences(currentUID);
// console.log("Pagination Count:  ", paginationCount);
var friendCount = getFriendCount(currentUID);
// console.log("Friend Count:  ", friendCount);
var numPages = Math.floor(friendCount / paginationCount);
//console.log("numPages:  ", numPages);

//960px/6 = 160  
var friendWidth = (width / (paginationCount / 2)) - (friendSpacing * 2);
console.log("FriendWidth = " + friendWidth);