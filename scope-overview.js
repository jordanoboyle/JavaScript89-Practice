// here we are going to cover the issue of Scope within JavaScript. 
//This is an important concept in all programming languages and varies a little in each one, but is very similar between them all
let globalVar = "this is a global variable";
const gVar = "this is also a global variable";

{  
  //Block 1 scope
  let localVar = "Local in Block1";
  const lVar = "Local in Block1 as well";

  console.log("THIS IS EXECUTED IN OUTER BLOCK1.")
  console.log(globalVar);  //accessible 
  console.log(localVar); //accessible
  console.log('-----------');
  console.log(gVar);       //accessible
  console.log(lVar);       //accessible
  console.log('#######################');

  {
    //Inner Block 2
    let innerVar = "From Inner Block 2";
    const iVar = "From the Inner Block 2 too";

    console.log("THIS IS EXECUTED IN THE INNER BLOCK 2")
    console.log(globalVar);  //accessible down the bored
    console.log(gVar);
    console.log('-----------');
    console.log(localVar);
    console.log(lVar);
    console.log('-----------');
    console.log(innerVar);
    console.log(iVar);
    console.log('#################');
  }

  
  // let's do some exception handling to let us know we can't access Inner Block 2; innerVar and iVar
  try {
    console.log(innerVar);
  } catch (ReferenceError) {
    console.error("A ReferenceError occurred. You cannot try to access block scoped variables.");
  } finally {
    //Clean up code can go here. (this is optional)
    console.log("Finally we executed the block");
  }

}

console.log('ONE LAST TIME HERE')
// Let's do one more exception handling to make sure we re-iterate what is happening here. 

try {
  console.log(localVar);
} catch (ReferenceError) {
  console.error("A ReferenceError occurred. Cannot access block scoped variable globally");
} finally {
  //could put clean up code here.
  console.log("This will still execute because I added a finally fix line.");
}

/* This provides the basis for all variable referencing within JavaScript. While you can use var if desired
it is a special application variable and must be used with care because of hoisting.*/
