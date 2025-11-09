let arr = [2, 6, 6, 3, 2, 1]

function removeDupli(arr){

  let x = 0

  for(let i=0;i<arr.length;i++){
    if(arr[x]!==arr[i]){
      x++
      arr[x] = arr[i]
    }
  }

  return arr
}


console.log(removeDupli(arr));
