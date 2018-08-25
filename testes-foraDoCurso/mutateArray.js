const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  var aux;
  for(var i = 0; i < s.length; i++){
      for(var j = 0; j < s.length; j++){
          if(s[i] < s[j]){
            aux = s[i]
            s[i] = s[j]
            s[j] = aux
          }
      }
  }

  console.log(s);

  // change code above this line
}
editInPlace();