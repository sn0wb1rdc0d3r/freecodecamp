function testHasOwnProperty(){
  var myObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh"
  }; 
  function funHasOwnProperty(checkProp){
    if(myObj.hasOwnProperty(checkProp)) { 
      console.log(myObj[checkProp]);
      $('#divTestHasOwnProperty').text(myObj[checkProp]);
      // return myObj[checkProp]; 
    }
    else { 
      console.log("Not Found");
      $('#divTestHasOwnProperty').text("Not Found");
      // return "Not Found"; 
    }
  }
  $('#btnTestHasOwnProperty').click(function(){
    var selection = $('#selTestHasOwnProperty').val();
    funHasOwnProperty(selection);
  });
}
$(document).ready(testHasOwnProperty);

function handleLookupProfile(){
  //Setup
  var contacts = [
      {
          "firstName": "Akira",
          "lastName": "Laine",
          "number": "0543236543",
          "likes": ["Pizza", "Coding", "Brownie Points"]
      },
      {
          "firstName": "Harry",
          "lastName": "Potter",
          "number": "0994372684",
          "likes": ["Hogwarts", "Magic", "Hagrid"]
      },
      {
          "firstName": "Sherlock",
          "lastName": "Holmes",
          "number": "0487345643",
          "likes": ["Intriguing Cases", "Violin"]
      },
      {
          "firstName": "Kristian",
          "lastName": "Vos",
          "number": "unknown",
          "likes": ["Javascript", "Gaming", "Foxes"]
      }
  ];

  function lookUpProfile(fname, prop){
// Only change code below this line
    for(var i=0; i < contacts.length; i++) {
      if (contacts[i].firstName == fname) {
        if (contacts[i].hasOwnProperty(prop)) {
          console.log(contacts[i][prop]);
          $('#divLookupProfile').text(contacts[i][prop]);
          return contacts[i][prop];
        } else  {
          console.log("No such property");
          $('#divLookupProfile').text("No such property");
          return "No such property";          
        }   
      } else {
        continue;
      } 
    } 
        console.log("No such contact");
        $('#divLookupProfile').text("No such contact");
        return "No such contact";
// Only change code above this line
}
 $('#btnLookupProfile').click(function(){
    var selectName = $('#selLookupProfileName').val();
    var selectProp = $('#selLookupProfileProp').val();
    lookUpProfile(selectName, selectProp);
  });

}
$(document).ready(handleLookupProfile);

