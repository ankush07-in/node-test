// function factorial(n){
//     if(n === 0){
//         return 1;
//     } else {
//         return factorial(n-1) * n;
//     }
// }

// console.log(factorial(5)); // => 120

const people = [
    {
        name: "Bheem",
        age: 12,
        city: "Kerala",
        "address":""
    },
    {
        name: "Chacha",
        age: 18,
        city: "Raipur",
        "address":""
    }, 
    {
        name: "Amit",
        age: 27,
        city: "kolkata",
        "address":""
    },
];

console.table(people,['name','address']);

const data = {
    labels: ['January', 'February', 'March'],
    values: [12, 24, 36]
};

console.table(data);

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.table(matrix);