function positiveSum(arr) {
    let sum = 0;
    arr.forEach(num =>{
               if (num>0){
                 sum++;
               }
      return sum;
    })
    console.log(arr,sum)
  }