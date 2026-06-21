//Product of Array Except Self

function productExceptSelf(nums) {
    let n = nums.length; //4
    let result = new Array(n).fill(1); 


    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct; 
        rightProduct *= nums[i]; 
        console.log(result);
        
    }
    
    return result;
}

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]