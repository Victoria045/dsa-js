function binary_search(list, target) { 
  let first = 0
  let last = list.length - 1

  while(first <= last) {

    midpoint = Math.floor((first + last) / 2)

    if(list[midpoint] === target) {
      return midpoint      
    }
    else if(list[midpoint] < target) {
      first = midpoint + 1 
    }
    else {
      last = midpoint - 1
    }
  }
  return
}

const numbers = [2,5,4,10,9,6,8,11,15,1]
// numbers.sort(function(a,b){return a-b})
numbers.sort((a,b) => a - b)
// numbers = [1,2,4,5,6,8,9,10,11,15]

// numbers = [1,2,3,4,5,6,7,8,9,10]

function verify(index) {
  if(index) {
    console.log(`The index is ${index}`)
  } else {
    console.log("Value not found!")
  }
}

const results = binary_search(numbers, 10)
// console.log(results)
verify(results)