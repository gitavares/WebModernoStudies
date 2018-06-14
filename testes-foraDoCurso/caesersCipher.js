function rot13(str) { // LBH QVQ VG!

    var newStr = '';

    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {          
            if((str.charCodeAt(i) + 13) > 90){
                newStr += String.fromCharCode(str.charCodeAt(i) - 13);
            } else {
                newStr += String.fromCharCode(str.charCodeAt(i) + 13);
            }
        } else {
            newStr += String.fromCharCode(str.charCodeAt(i));
        }

    }

    return newStr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

// 90 = Z
// 65 = A


// function rot13(str) { // LBH QVQ VG!
//     return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
//   }
  