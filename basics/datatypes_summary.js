//7 types number ,string ,bigint ,symbol ,undefined ,null,boolean
//array,objects,functions

const score=100;
const scoreval=100.3;

const isloggedin=false;
const outsidetemp=null;
let useremail;

const id=Symbol('123');
const anotherid=Symbol('123')
console.log(id===anotherid);

const bignumber=3544564765587687n
console.log(bignumber);

//non premitives
//array
const heroes=["deepika","rupali","radhika"];
//object
let myobj={
  name:"Deepika",
  age:20,
}
//function
const myfunction=function(){
    console.log("hello world");

}
console.log(typeof bignumber);
console.log(typeof id );