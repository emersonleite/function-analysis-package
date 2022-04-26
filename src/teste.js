
function constructorFunction(params, body) {
  return new Function(params, body)
}

// let f = constructorFunction("steps", "const arr = [];for (let i = 0; i < steps; i++) { arr.push(i*Math.log(i)); }")

function f (steps) {
  const arr = [];
  for (let i = 0; i < steps; i++) { 
    arr.push(i*i**i)
   }
}


function getTime(entryfunction, param) {
  performance.mark("marker-a")
  entryfunction(param)
  performance.mark("marker-b")
  performance.measure("A to B", "marker-a", "marker-b")

let {duration} = performance.getEntriesByType("measure")[0]

performance.clearMarks();
performance.clearMeasures();

return duration

}



const arr = []
const limit = 655360
let i = 2

while(i <= limit){
  arr.push({x:i,y:getTime(f, i)})
  i *= 2
}

// console.log( getTime(f, 100000000))

console.log(arr)







