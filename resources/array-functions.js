// MIRROR MAP
Array.prototype.mirrorMap =  function ( callback = () => {} ){
  const arr = this
  const array_to_return = []
  for(let i = 0; i < arr.length; ++i){
    const t1 = callback(arr[i], i, arr)
    array_to_return.push(t1)
  }
  return array_to_return
}

// MIRROW FILTER
Array.prototype.mirrorFilter = function ( callback = () => {} ) {
  
}