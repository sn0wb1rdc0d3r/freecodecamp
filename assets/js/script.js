// function testHasOwnProperty(){
//   var myObj = {
//     "gift": "pony",
//     "pet": "kitten",
//     "bed": "sleigh"
//   }; 
//   function funHasOwnProperty(checkProp){
//     if(myObj.hasOwnProperty(checkProp)) { 
//       console.log(myObj[checkProp]);
//       $('#divTestHasOwnProperty').text(myObj[checkProp]);
//       // return myObj[checkProp]; 
//     }
//     else { 
//       console.log("Not Found");
//       $('#divTestHasOwnProperty').text("Not Found");
//       // return "Not Found"; 
//     }
//   }
//   $('#btnTestHasOwnProperty').click(function(){
//     var selection = $('#selTestHasOwnProperty').val();
//     funHasOwnProperty(selection);
//   });
// }
// $(document).ready(testHasOwnProperty);

// function handleLookupProfile(){
//   //Setup
//   var contacts = [
//       {
//           "firstName": "Akira",
//           "lastName": "Laine",
//           "number": "0543236543",
//           "likes": ["Pizza", "Coding", "Brownie Points"]
//       },
//       {
//           "firstName": "Harry",
//           "lastName": "Potter",
//           "number": "0994372684",
//           "likes": ["Hogwarts", "Magic", "Hagrid"]
//       },
//       {
//           "firstName": "Sherlock",
//           "lastName": "Holmes",
//           "number": "0487345643",
//           "likes": ["Intriguing Cases", "Violin"]
//       },
//       {
//           "firstName": "Kristian",
//           "lastName": "Vos",
//           "number": "unknown",
//           "likes": ["Javascript", "Gaming", "Foxes"]
//       }
//   ];

//   function lookUpProfile(fname, prop){
// // Only change code below this line
//     for(var i=0; i < contacts.length; i++) {
//       if (contacts[i].firstName == fname) {
//         if (contacts[i].hasOwnProperty(prop)) {
//           console.log(contacts[i][prop]);
//           $('#divLookupProfile').text(contacts[i][prop]);
//           return contacts[i][prop];
//         } else  {
//           console.log("No such property");
//           $('#divLookupProfile').text("No such property");
//           return "No such property";          
//         }   
//       } else {
//         continue;
//       } 
//     } 
//         console.log("No such contact");
//         $('#divLookupProfile').text("No such contact");
//         return "No such contact";
// // Only change code above this line
// }
//  $('#btnLookupProfile').click(function(){
//     var selectName = $('#selLookupProfileName').val();
//     var selectProp = $('#selLookupProfileProp').val();
//     lookUpProfile(selectName, selectProp);
//   });

// }
// $(document).ready(handleLookupProfile);

// function handleRegex() {
//     // Setup
//   var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
//   // Example
//   var expressionToGetSoftware = /software/gi;
//   var softwareCount = testString.match(expressionToGetSoftware).length;
//   // Only change code below this line.
//   var expression = /and/gi;  // Change this Line
//   // Only change code above this line
//   // This code counts the matches of expression in testString
//   var andCount = testString.match(expression).length;
//   $('#divRegex').text(andCount);
// }
// $(document).ready(handleRegex);

// function handleJoin() {
//   var stringArray = ['Blue', 'Humpback', 'Beluga'];
//   var numericStringArray = ['80', '9', '700'];
//   var numberArray = [40, 1, 5, 200];
//   var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

//   function compareNumbers(a, b) {
//     return a - b;
//   }

//   console.log('stringArray:', stringArray);
//   console.log('Sorted:', stringArray.sort());

//   console.log('numberArray:', numberArray.join());
//   console.log('Sorted without a compare function:', numberArray.sort());
//   console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

//   console.log('numericStringArray:', numericStringArray.join());
//   console.log('Sorted without a compare function:', numericStringArray.sort());
//   console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

//   console.log('mixedNumericArray:', mixedNumericArray.join());
//   console.log('Sorted without a compare function:', mixedNumericArray.sort());
//   console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
// }
// $(document).ready(handleJoin);

// function handleMappedSort() {
//   var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

//   // temporary array holds objects with position and sort-value
//   var mapped = list.map(function(el, i) {
//     return { index: i, value: el.toLowerCase() };
//   })

//   // sorting the mapped array containing the reduced values
//   mapped.sort(function(a, b) {
//     return +(a.value > b.value) || +(a.value === b.value) - 1;
//   });

//   // container for the resulting order
//   var result = mapped.map(function(el){
//     return list[el.index];
//   });
//   console.log(result);
// }
// $(document).ready(handleMappedSort);

// function handleAlgorithmReverse() {
  
//   function reverseString(str) {
//     var arr = str.split('');
//     arr.reverse()
//     str = arr.join('');
//     console.log(str);
//     return str;
//   }
//   reverseString("hello");
// }
// $(document).ready(handleAlgorithmReverse);

// function handleFactorialize() {
// function factorialize(num) {
//   var fact = 1;
//   for (i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// console.log(factorialize(5));

// }
// $(document).ready(handleFactorialize);

// function handleCheckPalindrome() {
  
//   function palindrome(str) {
//     // Good luck!
//     var strRepl = str.replace(/[^A-Za-z0-9]/gi, '')
//     .toLowerCase();
//     console.log(strRepl);
//     var arr = strRepl.split('');
//     arr.reverse()
//     strReplRev = arr.join('');
//     console.log(strReplRev);
//     console.log(strRepl == strReplRev);
//     return strRepl == strReplRev;
//   }
//   palindrome("1 eye for of 1 eye.");

// }
// $(document).ready(handleCheckPalindrome);

// function handleFindLongestWord(){
//   function findLongestWord(str) {
//     var counter = 0;
//     var arr = str.split(' ');
//     for (i = 0; i < arr.length; i++) {
//       if(arr[i].length > counter) {
//         counter = arr[i].length;
//       } else continue;
//     } 
//     console.log(counter);
//     return counter;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");
// }
// $(document).ready(handleFindLongestWord);

// function handleToTitleCase() {
//   function toTitleCase(str)
//   {
//       return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//   }
// }
// $(document).ready(handleToTitleCase);

// function handleLargestOfFour() {
//   function largestOfFour(arr) {
//     // You can do this!
//     var bigArr = [];
//     for (var i = 0; i < arr.length; i++) {
//       var bigNum = 0;
//       for (var j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > bigNum) bigNum = arr[i][j];
//         else continue;
//       }
//       bigArr[i] = bigNum;
//       // arr[i].forEach(function(elem){
//       //   if (elem > bigNum) bigArr = arr[i]; 
//       // })
//     }
//     console.log(bigArr);
//     return bigArr;
//   }

//   largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return [27,5,39,1001].
//   largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //should return [9, 35, 97, 1000000].

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// }
// $(document).ready(handleLargestOfFour);

// function handleSubstr() {
  
//   function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     tLen = target.length;
//     console.log(str.substr(-tLen))
//     sub = str.substr(-tLen);
//     if (sub == target) return true; 
//     else return false;
//         console.log("thisString".substr(-3));
//     return str;
//   }
//   confirmEnding("Bastian", "n");
// }
// $(document).ready(handleSubstr);

// function handlerepeatStringNumTimes() {
//   function repeatStringNumTimes(str, num) {
//     // repeat after me
//     var repStr = "";
//     if (num > 0) {
//       for(var i=0; i<num; i++) {
//         repStr += str;
//       }
//     }  
//     console.log(repStr);
//     return repStr;
//   }

//   repeatStringNumTimes("abc", 3);
// }
// $(document).ready(handlerepeatStringNumTimes);

// function handleTruncateString() {
  
//   function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     var truncStr = "";
//     if (num>3 && num < str.length) {
//       truncStr = str.slice(0, num-3) + "...";
//     } else if (num <= 3) {
//       truncStr = str.slice(0, num) + "..."; 
//     } else {
//       truncStr = str;
//     }
//       console.log(truncStr);
//       return truncStr;
//   }
//   truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
// }
// $(document).ready(handleTruncateString);

// function handleChunky(){  
//   function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     output = [];
//           for (i = 0; i < arr.length; i += size) {
//               output.push(arr.slice(i, size + i));
//           }
//     console.log(output);
//     return output;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
//   chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
  
// }
// $(document).ready(handleChunky);

// function handleMutation(){
//   function mutation(arr) {
//     var searchStr = arr[0].toLowerCase();
//     var letter = "";
//     for (var i = 0; i < arr[1].length; i++) {
//       letter = arr[1][i].toLowerCase();
//       if (searchStr.indexOf(letter) != -1) {
//         continue;
//       } else {
//         console.log(false);
//         return false;
//       }
//     }
//     console.log(true);
//     return true;
//   }

//   mutation(["hello", "Hello"]);
// }
// $(document).ready(handleMutation);

// (function handleFilter() {
  
//   function bouncer(arr) {
//     // Don't show a false ID to this bouncer.
//     function isntFalsy(el) {      
//       var b = Boolean(el);
//       // console.log(b);
//       return b;   
//     }

//     var filterArr = arr.filter(isntFalsy);
//     console.log(filterArr);
//     return filterArr;
//   }

//   bouncer([7, "ate", "", false, 9]);
//   bouncer([false, null, 0, NaN, undefined, ""]); //should return [].
// })();


// (function handleDestroyer() {
//   function destroyer(arr) {
//     // Remove all the values
//       var search = [];
//       for (var i = 1; i < arguments.length; i++) {
//         search.push(arguments[i]);
//       }
//       // console.log(arguments[0]);       
//       function destroy(el) {
//         return search.indexOf(el) == -1
//       }
//       var destroyedArr = arguments[0].filter(destroy);
//       return destroyedArr;
//   }

//   destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
//   destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
//   destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
//   destroyer([2, 3, 2, 3], 2, 3) //should return [].
//   destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].

// })();

(function handlegetIndexToIns() {
  function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var sortedArr = arr.sort(function(a,b) {
      return a-b;
    });    
    var idx = 0;
    var BreakException = {};
    console.log("sortedArr: " + sortedArr + " num: " + num);
    try {
      sortedArr.forEach(function (value, i) {
        console.log("value: " + value + " i: " + i);
        if(num <= value) {
          idx = i;
          console.log("idx: " + idx);
          throw BreakException;
        } else idx = sortedArr.length; 
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
    return idx;
  }
  getIndexToIns([2, 5, 10], 15); //should return 3.
})();

(function handleRot13() {
  function rot13(str) { // LBH QVQ VG!
    var cipherArr = [];
    var decodedStr = "";
    //load up the cipherArr
    for (var i = 0; i < str.length; i++) {
      cipherArr.push(str.charCodeAt(i)); 
    }
    //transform the cipherArr to appropriate charcodes in place
    //add range for uppercase alpha chars & pass on everything else
    for (var j = 0; j < cipherArr.length; j++) {
      if (cipherArr[j] > 77 && cipherArr[j] < 91) {
        cipherArr[j] -= 13;
        console.log("cipherArr[j]-13: " + cipherArr[j]);
      } else if (cipherArr[j] > 64 && cipherArr[j] < 78) {
        cipherArr[j] += 13;
        console.log("cipherArr[j]+13: " + cipherArr[j]);
      } else {
        continue;
      }
    }
    //convert charcodes of cipherArr to decodedStr  
    for (var k = 0; k < cipherArr.length; k++) {
      decodedStr += String.fromCharCode(cipherArr[k]);
    }
    console.log(decodedStr);
    return decodedStr;
  }

  rot13("NA"); 

  rot13("SERR YBIR?"); //should decode to "FREE LOVE?"
  rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
})();
console.log('N'.charCodeAt(0)); // returns 65
console.log(String.fromCharCode(78, 78-13));  // "NA"