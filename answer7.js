function findMissingRanges(nums, lower, upper) {
    const result = [];
    let prev = lower - 1;

    for (let i = 0; i <= nums.length; i++) {
        let curr = (i === nums.length) ? upper + 1 : nums[i];
        if (curr - prev >= 2) {
            result.push(formatRange(prev + 1, curr - 1));
        }
        prev = curr;
    }

    return result;
}

function formatRange(start, end) {
    return (start === end) ? `${start}` : `${start}->${end}`;
}

// Test example
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result); // Output: [[2,2],[4,49],[51,74],[76,99]]
