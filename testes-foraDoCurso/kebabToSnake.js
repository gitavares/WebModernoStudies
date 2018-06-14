function kebabToSnake(str){
    return str.replace(/-/g, '_');
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));