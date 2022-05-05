// SCRIPT FOR FIZZBUZZDOM

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



for ( let i = 1; i < 101 ; i++) {
    //select div.grid from dom
    const grid = document.querySelector("div.grid");
    //create a div inside
    const div = document.createElement(`div`);

    // const box = document.querySelector("div.box");
    // const p = document.createElement('p');

    div.classList.add('box');
    grid.append(div);
    // 
    div.append(i);
    // 

}
