const name="Deepika"
const repocount=15

console.log(`My name is ${name} and my repo count is ${repocount}`);
const gameName=new String('Deepikavk')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

//functions

console.log(gameName.substring(0,4));//end number is not included
console.log(gameName.slice(-6,5));

//trim
const a="  deepika  "
console.log(a);
console.log(a.trim());
console.log(a.trimStart());

//replace
const url="https://deepika%20vk";
console.log(url.replace('%20','-'));
console.log(url.includes('deepika'));
//convert in array
const str="deepika-vk-kv-hu"
console.log(str.split('-'));