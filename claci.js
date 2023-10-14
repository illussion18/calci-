// function add(){
//      let a = document.getElementById("First").value;
//      let b = document.getElementById("Second").value;
//      let output = Number(a) + Number(b);
//      document.getElementsByClassName("out")[0].innerText= `sum of the number is ${output}`;


// }
// function sub(){
//     let a = document.getElementById("First").value;
//     let b = document.getElementById("Second").value;
//     let output = Number(a) - Number(b);
//     document.getElementsByClassName("out")[0].innerText= `sub of the number is ${output}`;


// }

function calc(option){
    let a = document.getElementById("First").value;
   let b = document.getElementById("Second").value;
   let output
   if(option=="add"){
     output=`sum of the number is ${ Number(a) + Number(b)}`;
   }else{
    output=`subtraction of the number is ${Number(a)-Number(b)}`;
   } 
   document.getElementsByClassName("out")[0].innerText= output;



}