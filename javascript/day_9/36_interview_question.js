const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
// if it would have been any other language like JAVA or C++ it would have thrown an exception and program would have crashed.
// But since its javascript which is very user friendly and it tries to handle most of the exception by itself so it will insert 11 at the 10TH position(index) of the array. And add empty slots in between the 2nd and 10th index. like this
// [1,2,3, empty*7, 11]

// function Person(initialAge){
//     // Add some more code to run some checks on initialAge
//     if(initialAge>=0){
//         this.initialAge = initialAge;
//     } else{
//         console.log("Age is not valid, setting age to 0.")
//         this.initialAge = 0;
//     }
//   this.amIOld=function(){
//    // Do some computations in here and print out the correct statement to the console
//     if(this.initialAge<13){
//         console.log("You are young.");
//     } else if(this.initialAge>=13 && this.initialAge<18){
//         console.log("You are a teenager.");
//     } else{
//         console.log("You are old.")
//     }
//   };
//    this.yearPasses=function(){
//           this.initialAge++;
//    };
// }
// var ageArr = [4, -1, 10, 16, 18];
// for(let I=0; i<arr.length; i++){
// var p=new Person(age);
//     p.amIOld();
//     for(j=0;j<3;j++){
//         p.yearPasses();

//     }
//     p.amIOld();
// }
