// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    // var collectionLength = Object.keys(collection).length;
    
    if(value !== ""){
        if(prop !== "tracks"){
            //include the new prop and its value
            collection[id][prop] = value;
        } else {
            if(collection[id][prop] === undefined){
                //create an array tracks empty and push the value
                collection[id][prop] = []
            }
            //just push the value in the end of the array
            collection[id][prop].push(value)
        }
    // } else {
        //     delete collection[id][prop] // this is just to pass on FreeCodeCamp exercise. Not needed at all.
    }
  
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA")
updateRecords(5439, "tracks", "Take a Chance on Me")
updateRecords(2548, "artist", "")
updateRecords(1245, "tracks", "Addicted to Love")
updateRecords(2468, "tracks", "Free")
updateRecords(2548, "tracks", "")
updateRecords(1245, "album", "Riptide")
console.log(collection)
