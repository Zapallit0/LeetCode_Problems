// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//  toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//   notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

//Mu Solution with help
function expect(val1) {
    return{
    toBe:(val2)=>{
        if (val1!==val2) throw new Error ("Not Equal")
        else return true
        },
    notToBe:(val2)=>{
        if (val1===val2){
            throw new Error("Equal")  
        }
        else return true
    }
    }
};

//Other solutions
function expect(val1) {
    function toBe(val2){
        if (val1!==val2) throw new Error ("Not Equal")
        else return true
        }
    function notToBe(val2){
        if (val1===val2){
            throw new Error("Equal")  
        }
        else return true
    }
    return {toBe, notToBe}
}; //returning the fnctions