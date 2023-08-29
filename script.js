function threeSum(arr, target) {
// write your code here
	 arr.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = arr[0] + arr[1] + arr[2]; // Initialize closestSum

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum; // Update closestSum if the current sum is closer to the target
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
  
}

module.exports = threeSum;
