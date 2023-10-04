const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
   const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum);
}

