const a=['A','B','C']
const b=['D','E','F']
const c=a.concat(b);
console.log(c);
//also we have spread method to get indivial element  
const all=[...a,...b];
console.log(all);

const f=[1,2,3,[4,5,6,[7,8,[9],5],4]]
const real=f.flat(Infinity)
console.log(real);

//converting to array from st rings or objects

console.log(Array.isArray("Deepika"));
console.log(Array.from("Deepika"));

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));