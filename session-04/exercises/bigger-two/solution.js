function biggerTwo(a, b){
    let sumA = a[0] + a[1]
    let sumB = b[0] + b[1]
    if(sumA == sumB || sumA > sumB){
    return a}
    else if(sumB > sumA){
    return b}
    }