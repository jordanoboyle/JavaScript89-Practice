// 3. Find the First Mismatch from Either End of Two Arrays
// Description: Write a function that compares two arrays using two-point iteration, starting from both the beginning and the end of the arrays simultaneously. The function should return the index of the first mismatched pair of elements, prioritizing the pair whose mismatch is closer to the respective ends of the arrays. If the mismatches occur at the same distance from both ends, return the one closer to the start (left). If both arrays are identical when compared this way, return null.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 6, 5];
// Expected output: 3 (mismatch at index 3: 4 vs 6, which is closer to the start)

const arr3 = [7, 8, 9, 10, 11, 12];
const arr4 = [7, 8, 0, 10, 11, 13];
// Expected output: 2 (mismatch at index 2: 9 vs 0, closer to the start than the mismatch at index 5: 12 vs 13)

const arr5 = [4, 3, 2, 1];
const arr6 = [4, 3, 2, 9];
// Expected output: 3 (mismatch at index 3: 1 vs 9, which is closer to the end)
