/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

function save(sizes, hd) {
  let result = 0;
  sizes.reduce((acc, el) => {
    if ((acc += el) <= hd) result += 1;
    return acc;
  }, 0);
  return result;
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([4, 8, 15, 16, 23, 42], 108));
