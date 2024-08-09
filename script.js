// Fundamental of JavaScript
// arrays and objects
// functions return
// async js coding

// forEach, map, filter, find, indexOf
// var arr = [1,2,3,4,"hey",{},true,function(){},[1,2,3]];

// forEach
var arr = [1,2,3,4];
arr.forEach(function(val){
    // console.table(val + " Hello");
});

// map
const ans = arr.map(function(val){
    return 13;
});
const anss = arr.map(function(val){
    return val + 12;
});
const anwss = arr.map(function(val){
    return val * 12;
});

// filter
const blob = arr.filter(function(val){
    if(val > 2) {return true;}
    else return false;
});

// find

const vaar = arr.find((val)=>{
    if(val === 0) return val;
});

// indexOf

const uttor = arr.indexOf(4);

// console.log(arr);
// console.log(ans);
// console.log(anwss);
// console.log(anss);
// console.log(blob);
// console.log(vaar);
// console.log(uttor);

// Object => key value pairs

// {
//     "name": "Ankush",
//     "age": 26,
//     "anything": "anything",
//     a: kolu
// }

var obj = {
    name: "Ankush",
    age: 18
}
Object.freeze(obj);
obj.age = 27;
// console.log(obj.age)

// functions return
function abcd(){
    return 12;
}

const yes = abcd();

const hey = abcd.length;
// console.log(hey);

// async js coding

// var bblob = await fetch(`https://randomuser.me/api/`);
// var res = await bblob.json();

// console.log(res);

async function abcd(){
    var blob = await fetch('https://randomuser.me/api/');
    var ans = await blob.json();

    console.log(ans.results[0].name);
    
}

abcd();