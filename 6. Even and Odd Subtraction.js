function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        let curNum = Number(array[i]);
        if (curNum % 2 === 0) {
            sumEven += curNum;
        } else {
            sumOdd += curNum;
        }
    }
    let difference = (sumEven - sumOdd);

    console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);