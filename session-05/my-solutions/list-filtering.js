function filter_list(l) {
    let returnVar = l.filter(i=>typeof(i)=='number');
    return returnVar;
  }