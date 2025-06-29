const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};

/*
concept of currying is used.
The above function is equal to this
const add = function(x){
    return function(y){
        return function(z){
            console.log(x,y,z);    
            return x+y+z;
        }
    }
}
*/

// output: 10,20,30
add(10)(20)(30);
