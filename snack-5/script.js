const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let numberIncrement = nums.filter((curNumber) => curNumber % 2 === 0);
console.log(numberIncrement);
