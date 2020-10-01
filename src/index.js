
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  } else {
    let min = array[0];
    array.forEach ((item, index) => {
      if (array[index] < min) {
        min = array [index];
      }
    })
    return min;
  }
}
  

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  } else {
  let max = array[0];
  array.forEach ((item, index) => {
    if (array[index] > max) {
      max = array [index];
    }
  })
  return max;
  }
}

exports.avg = function avg (array) {
  let avg = 0;
  let sum = 0;
  if(array === undefined || array.length === 0) {
    return 0;
  } else {
    for(let i = 0; i <= array.length - 1; ++i) {
        sum += array[i];
    }
    return avg = sum / array.length;
  } 
}
