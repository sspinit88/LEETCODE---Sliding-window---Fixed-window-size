/*

  найти наибольшую сумму значений подмассива заданной длины

*/

var findBestSubarray = function (nums, k) {
  let sum = 0;
  let res = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  res = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i-k];
    res = Math.max(res, sum);
  }

  return res;
};

console.log(findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4)); /// 18
