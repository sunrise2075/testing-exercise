const {isPalindrome, factorial,fibonacci,arraySum, capitalizeWords} = require('./script3');


describe('isPalindrome', () => {
    it('should return true for real palindrome string', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    });

    it('should return false for string input is undefined', () => {
        expect(isPalindrome(undefined)).toBe(false);
    });

    it('should return false for string input is null', () => {
        expect(isPalindrome(null)).toBe(false);
    });

    it('should return false for string input is empty', () => {
        expect(isPalindrome('')).toBe(false);
    });

    it('should return false for string input is blank', () => {
        expect(isPalindrome('     ')).toBe(false);
    });

    it('should return false for string input is not real palindrome', () => {
        expect(isPalindrome('apple')).toBe(false);
    });
    it('should return false for string input is a single letter', () => {
        expect(isPalindrome('a')).toBe(true);
    });
})

describe('factorial', () => {
    it('should return factorial', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return -1 when n 0 is less than 0', () => {
        expect(factorial(-2)).toBe(-1);
    });

    it('should return 1 when n equals 0', () => {
        expect(factorial(0)).toBe(1);
    });
});

describe('test fibonacci array', () => {
    it('should return 0 when n equals 0', () => {
       expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 when n equals 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('should return 1 when n equals 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('should return 2 when n equals 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('should return 3 when n equals 4', () => {
        expect(fibonacci(4)).toBe(3);
    });
});

describe('test array sum', () => {
    it('should return 0 when array is null', () => {
        expect(arraySum(null)).toBe(0);
    });

    it('should return 0 when array is undefined', () => {
        expect(arraySum(undefined)).toBe(0);
    });

    it('should return 0 when array empty', () => {
        expect(arraySum([])).toBe(0);
    });

    it('should return 1 when array has only 1 as its single element', () => {
        expect(arraySum([1])).toBe(1);
    });

    it('should return 1 when array has only 1 as its single element', () => {
        expect(arraySum([1,5,7])).toBe(13);
    });

    it('should return 1 when array has only 1 as its single element', () => {
        expect(arraySum([1,5,7, 9])).toBe(22);
    });
});

describe('capitalizeWords test', () => {
    it('should return the first word in capitalized words', () => {
        expect(capitalizeWords('word')).toBe('Word');
    });

    it('should return undefined when str is null or undefined', () => {
        expect(capitalizeWords(undefined)).toBe(undefined);
        expect(capitalizeWords(null)).toBe(null);
    });

    it('should return the first word in capitalized words when a whole sentence is passed as argument', () => {
        expect(capitalizeWords('how old are you?')).toBe('How Old Are You?');
    });
});
