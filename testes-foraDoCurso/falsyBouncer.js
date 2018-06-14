function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    // var falsyValues = [ false, null, 0, "", undefined, NaN ];
    
    // var filtered = arr.filter(function(e){
    //     return this.indexOf(e) < 0;
    // }, falsyValues);

    // return filtered;

    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
  

// function isBigEnough(value) {
//     return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// console.log(filtered)
