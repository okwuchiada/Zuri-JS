// Question 1
function convertFahrToCelsius(F) {
    if (typeof F !== "number") {
        return `${F} is not a valid number but a/an ${typeof F}`;
    } else {
        return (((F - 32) * 5) / 9).toFixed(4) + " degC";
    }
}

console.log(convertFahrToCelsius(0));

// Question 2


function checkYuGiOh(n) {


    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr


}

console.log(checkYuGiOh(20));