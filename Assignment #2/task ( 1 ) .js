var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

function all(arr, call) {
  for (let i = 0; i < arr.length; i++) {
    if (!call(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(allAreLessThanSeven);
