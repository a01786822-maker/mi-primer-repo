/*
Ariel Pulver
TC2005B
*/



/* firstNonRepeating */
function firstNonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            return str[i];
        }
    }

    return null;
}



/* bubbleSort */
function bubbleSort(arr) {
    let newArr = [...arr];

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }

    return newArr;
}



/*invertArray */
function invertArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}



/* invertArrayInplace */
function invertArrayInplace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}



/* capitalize */
function capitalize(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(" ");
}



/* mcd */
function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}


/* hackerSpeak */
function hackerSpeak(str) {
    return str
        .replace(/a/g, "4")
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/o/g, "0")
        .replace(/s/g, "5");
}



/* factorize */
function factorize(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}



/* deduplicate */
function deduplicate(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}



/* findShortestString */
function findShortestString(arr) {
    let shortest = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length;
        }
    }

    return shortest;
}



/* isPalindrome */
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}



/* sortStrings */
function sortStrings(arr) {
    return [...arr].sort();
}



/* stats */
function stats(arr) {
    let sum = 0;
    let freq = {};
    let maxFreq = 0;
    let mode = null;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        freq[arr[i]] = (freq[arr[i]] || 0) + 1;

        if (freq[arr[i]] > maxFreq) {
            maxFreq = freq[arr[i]];
            mode = arr[i];
        }
    }

    let average = sum / arr.length;

    return [average, mode];
}



/* popularString */
function popularString(arr) {
    let freq = {};
    let maxFreq = 0;
    let popular = null;

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;

        if (freq[arr[i]] > maxFreq) {
            maxFreq = freq[arr[i]];
            popular = arr[i];
        }
    }

    return popular;
}



/* isPowerOf2 */
function isPowerOf2(num) {
    if (num < 1) return false;

    while (num > 1) {
        if (num % 2 !== 0) return false;
        num = num / 2;
    }

    return true;
}



/* sortDescending */
function sortDescending(arr) {
    return [...arr].sort(function(a, b) {
        return b - a;
    });
}


