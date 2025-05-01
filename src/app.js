import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
    let element=document.querySelector(".excuse")
    console.log("My dog ate my homework");
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My dad' , 'My mom' ,];

    let action = ['ate', 'peed', 'crushed', 'broke' , 'pooped' ,];
    console.log(action);
    let what = ['my homework', 'my phone', 'the car' , 'my keys' , 'my leg'];
    console.log(what);
    let when = ['before the class', 'when I was sleeping', 'while I was exercising' , 'while driving', 'during my lunch', 'while I was praying', 'while I was on the toilet'];
    console.log(when);
    const getRanInt=(array)=>{
      return Math.floor(Math.random() * array.length);
    }
    element.innerHTML= who [getRanInt(who)]+" "+ action[getRanInt(action)]+" "+what[getRanInt(what)]+" "+when[getRanInt(when)];
   
    document.quarySelector
    const button = document.getElementById("btn btn-primary");
    button.addEventListener('click', () =>{
        alert('Button was clicked!');
    });
    

};
