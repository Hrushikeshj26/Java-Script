function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // If the current number is negative, it will flip our max and min.
        // So we swap maxSoFar and minSoFar before calculating.
        if (curr < 0) {
            let temp = maxSoFar;
            maxSoFar = minSoFar;
            minSoFar = temp;
        }

        // Calculate the new max and min
        maxSoFar = Math.max(curr, maxSoFar * curr);
        minSoFar = Math.min(curr, minSoFar * curr);

        // Update the overall result
        result = Math.max(result, maxSoFar);
    }

    return result;
}

const nums1 = [2, 3, -2, 4];
console.log(maxProduct(nums1)); // Output: 6 (from [2, 3])