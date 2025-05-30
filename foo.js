function dummyFunction() {
    // This is a dummy function
    return "Hello from dummyFunction!";
    }

    function complexDummyFunction(arr) {
        // This function takes an array, filters even numbers, squares them, and returns the result
        if (!Array.isArray(arr)) {
            throw new Error("Input must be an array");
        }
        return arr
            .filter(num => typeof num === 'number' && num % 2 === 0)
            .map(num => num * num);
    }