
/*6. Write a JavaScript program to sort an array of JavaScript objects. 
 Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
  
  Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
   [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
   [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]*/

   var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

  function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}
library.sort(dynamicSort("title"));
console.log(library);

