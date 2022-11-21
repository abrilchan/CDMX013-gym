function countPositivesSumNegatives(input) {
  
    let arrayToReturn = [];
    let sumPositivos = 0;
    let sumNegativos = 0;
    
    if ( input === null || input.length === 0 ){
      return arrayToReturn;
    }
    
    else {
      for( let i = 0; i < input.length; i++ ){
      if ( input[i] > 0 ){
        sumPositivos++;
      }
      else if ( input[i] < 0 ){
        sumNegativos+=input[i];
      }
    }
    
    
    arrayToReturn.push(sumPositivos);
    arrayToReturn.push(sumNegativos);
    
    
    
    
    return arrayToReturn;}
  }