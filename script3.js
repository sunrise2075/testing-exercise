function isPalindrome(str) {
    if (!str) return false;
    if (str.trim().length === 0) {
        return false;
    }

    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


function arraySum(arr) {
    if (!arr) {
        return 0;
    }
    return arr.reduce((sum, num) => sum + num, 0);
}

function capitalizeWords(str) {
    if (!str) {
        return str;
    }
    return str.replace(/\b\w/g, char => char.toUpperCase());
}


module.exports = {isPalindrome, factorial, fibonacci, arraySum, capitalizeWords};
