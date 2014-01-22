var preferences = [];

var addPreference = function(title, value){
 // var preferences = [];
  preferences.push({
    title: title,
    value: value
  });
  

};

var getPreferenceByTitle = function(title){
    for(var key in preferences){
      if(preferences.title = title){
        return preferences;
      }
    }
};

//add the preferences
addPreference('Data', 'private');
addPreference('Username', 'John Doe');

//print out the preferences
var i =0;
while(i < preferences.length){
  console.log(preferences[i].title + ': ' + preferences[i].value);
  i++;
}

//check that the 'Username' preference is set
console.log('Checking Username: ' + getPreferenceByTitle('Username'));

