const numbers = [1,2,5,3,7,8,9,10,14,15]

function linear_search(list, target) {
  for(let i = 0; i <= list.length; i++) {
    if(list[i] == target) {
      console.log(i)
      return
    } else {
      console.log("Value does not exist")
    }
  }
}

linear_search(numbers, 5)