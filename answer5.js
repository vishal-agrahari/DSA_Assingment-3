function plusOne(digits) {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);

        // If there is no carry, we can stop the loop
        if (carry === 0) break;
    }

    // If there is a remaining carry after the loop, insert it as a new digit
    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
}

// Test example
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]
