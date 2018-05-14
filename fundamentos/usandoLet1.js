var numero = 1 
{
    let numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

//resultado:
//dentro = 2
//fora = 1  //o let tem preferencia pelo escopo menor


// let numero = 1 
// {
//     let numero2 = 2
//     console.log('dentro=', numero)
// }
// console.log('fora=', numero)

//resultado:
//dentro = 1
//fora = 1  //o let tem preferencia pelo escopo menor


// let numero = 1 
// {
//     let numero = 2
//     console.log('dentro=', numero)
// }
// console.log('fora=', numero)

//resultado:
//dentro = 2
//fora = 1  //o let tem preferencia pelo escopo menor