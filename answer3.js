function nextPermutation(nums) {
    let i = nums.length - 2;

    // Find the first element from the right that is smaller than its right neighbor
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;

        // Find the smallest element to the right of nums[i] that is greater than nums[i]
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }

        // Swap nums[i] and nums[j]
        swap(nums, i, j);
    }

    // Reverse the elements to the right of nums[i]
    reverse(nums, i + 1);
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;

    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

// Test example
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]
