// function recursive_binary_search(list, target){
//   if(list.length == 0){
//     return false
//   } else {
//     midpoint = Math.floor(list.length / 2)
//     console.log(midpoint)
    
//     if(list[midpoint] === target){
//       return true
//     } else {
//       if(list[midpoint] < target){
//         // return recursive_binary_search(list.splice(midpoint + 1,))
//         return recursive_binary_search(list.splice(0,midpoint))
//       } else {
//         // return recursive_binary_search(list.splice(0,midpoint))
//         return recursive_binary_search(list.splice(midpoint + 1,list.length))
//       }
//     }
//   }
// }

// function verify(result){
//   console.log(`The target value is, ${result}`)
  
// }
// numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers)

// result = result = recursive_binary_search(numbers, 2)
// verify(result)
// console.log(result)

let A = [1,3,6,4,1,2]

function arraySearch(A) {
  let sortedList = A.sort((a,b) => a - b)
  
  for (let i = 1; i < 100000; i++){
    if(!sortedList.includes(i)) {
      return i
    }
  }
  return
}