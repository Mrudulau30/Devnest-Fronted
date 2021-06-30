let quizQuestion = [
  {
      "que":"Who is popularly called as the Iron Man of India?",
      "A":" Subhash Chandra Bose" ,
      "B" :"Sardar Vallabhbhai Patel" ,
      "C": "Jawaharlal Nehru" ,
      "D": "Govind Ballabh Pant",
      "ans":2
  },
  {  
      "que":"Who is the father of geometry?",
      "A":"Aristotle",
      "B":"Euclid",
      "C":"Pythagoras",
      "D":" Kepler",
      "ans":2
  },
  {
      "que":"HTML use for",
      "A":" To hack NASA" ,
      "B" :"To create webpages" ,
      "C": "To create android apps" ,
      "D": "I don't know what is HTML is",
      "ans":2
  
  },
  {
      "que":"Why is Karnataka famous in India?",
      "A":"For it's wooden toys" ,
      "B" :"For it's size" ,
      "C": "For it's no. of malls" ,
      "D": "For Infyosis",
      "ans":1
  },
  {
      "que":"2+2 ?",
      "A":" 4" ,
      "B" :"22" ,
      "C": "2+2" ,
      "D": "0",
      "ans":1
  },
  {
      "que":"Who invented the slogan GO CORONA GO ?",
      "A":" Rahul Gandhi" ,
      "B" :"Ramdas Athawale" ,
      "C": "Arvind Kejriwal" ,
      "D": "Narendra Modi",
      "ans":2
  },
  {
      "que":"What is India's national language?",
      "A":" Tamil" ,
      "B" :"Hindi" ,
      "C": "English" ,
      "D": "Punjabi",
      "ans":2
  
  },
  {
      "que":"Who in India explained that the Earth was round?",
      "A":"Ashoka" ,
      "B" :"Kalidas" ,
      "C": "Aryabhatta" ,
      "D": "Mahatma Gandhi",
      "ans":3
  },
  {
      "que":"Which tale of India is the most famous?",
      "A":"Mahabarat" ,
      "B" :"Jataka tales" ,
      "C": "Don" ,
      "D": "Tarak Mehta Ka Ulta Chashma",
      "ans":1
  },
  {
      "que":"JS stands for?",
      "A":"Jaherila Sharbat" ,
      "B" :"Janhavi Shukla" ,
      "C": "JavaScript" ,
      "D": "None",
      "ans":3
  }
  ]


// timer
var timer=setInterval(countTimer,1000);
var sec=0;
function countTimer(){
    sec++;
    var hour=Math.floor(sec/3600);
    var minute=Math.floor((sec-hour*3600)/60);
    var second=sec-(hour*3600+minute*60);
    document.getElementById("timer").innerHTML= minute+"&nbsp"+":"+"&nbsp"+second;
}





// //fetch
// let question;
// fetch("question.json")
// .then(function(que1){
//   return que1.json();
// })
// .catch(function(err){
//   console.log(err);
// })

const q1=document.querySelector('.question');
const a1=document.querySelector('#ans1');
const a2=document.querySelector('#ans2');
const a3=document.querySelector('#ans3');
const a4=document.querySelector('#ans4');


let index = 0;
let lastindex=10
let score =0;
let start = () => {
  // console.log("hello");
  // console.log(index);
 
  let list=quizQuestion[index];
  
  q1.innerHTML=list.que
  a2.innerHTML=list.B
  a1.innerHTML=list.A
  
  a3.innerHTML=list.C
  a4.innerHTML=list.D
 

}
start();

const nextQuestion = () => {
    index+=1;
    if(index===lastindex){
        alert("its end");
        console.log(score);
        return;
    }
    else{
    start();
    }
}
let data;
function checkAnswer( data){
    let list1=quizQuestion[index];
    // console.log(list1.ans);
    //  console.log(data);
    
if(data===(list1.ans)){
    
score+=1;

}
else{
   alert("false"); 
   data.classList.remove("onClick");
}
}