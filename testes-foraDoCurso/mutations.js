function mutation(arr) {
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr.length; j++){
         arr[i].indexOf(arr[j]);
         console.log(arr[i].indexOf(arr[j]));
      }
    }
    // var secondElement = arr[1].slice();
    // console.log(secondElement);

    // console.log("arr[0]: " + arr[0]);
    // console.log("arr[1]: " + arr[1]);
    // console.log((arr[0].slice()).indexOf(arr[1].slice()));

    // console.log('giselle'.indexOf('ellesig'.slice(7)));
    // console.log('Nome: ' + 'ellesig'.slice(7))

    return arr[0].indexOf(arr[1]);
  }
  
  console.log(mutation(["hello", "hey"])); // false
  console.log(mutation(["hello", "Hello"])); //true
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
  console.log(mutation(["Mary", "Army"])); //true
  console.log(mutation(["Mary", "Aarmy"])); //true
  console.log(mutation(["Alien", "line"])); //true
  console.log(mutation(["floor", "for"])); //true
  console.log(mutation(["hello", "neo"])); //false
  console.log(mutation(["voodoo", "no"])); //false