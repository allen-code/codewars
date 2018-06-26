function fakeBin(x){
    return x.split('').map(item =>
    {
      return parseInt(item) < 5 ? 0 : 1
    }).join('')
  }