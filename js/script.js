// SCRIPT FOR FIZZBUZZDOM

//debug code
/*
console.log("helloworld!");
for ( let i = 1; i < 101 ; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if ( i % 3 == 0 ) {
        console.log("Fizz");
    } else if (i % 5 == 0 ){
        console.log("Buzz");
    } else {
        console.log(i);
   }   
}
*/


for ( let i = 1; i < 101 ; i++) {
    //select div.grid from dom
    const grid = document.querySelector("div.grid");
    //create a div inside
    const div = document.createElement(`div`);
    //adding .box to div
    div.classList.add('box');
    //appending div to div.grid
    grid.append(div);

    //create a if statement
    if (i % 3 == 0 && i % 5 == 0) {
        div.classList.add('fizzbuzz');
        div.append('FizzBuzz');
    } else if ( i % 3 == 0 ) {
        div.classList.add('fizz');
        div.append('Fizz');
    } else if ( i % 5 == 0 ) {
        div.classList.add('buzz');
        div.append('Buzz');
    } else {
        div.append(i);
    }

}
