let quizQuestion = [
  {
      "que":"Who is popularly called as the Iron Man of India?",
      "A":" Subhash Chandra Bose" ,
      "B" :"Sardar Vallabhbhai Patel" ,
      "C": "Jawaharlal Nehru" ,
      "D": "Govind Ballabh Pant",
      "ans":"Sardar Vallabhbhai Patel"
  },
  {  
      "que":"Who is the father of geometry?",
      "A":"Aristotle",
      "B":"Euclid",
      "C":"Pythagoras",
      "D":" Kepler",
      "ans":"Euclid"
  },
  {
      "que":"Who is popularly called as the Iron Man of India?",
      "A":" Subhash Chandra Bose" ,
      "B" :"Sardar Vallabhbhai Patel" ,
      "C": "Jawaharlal Nehru" ,
      "D": "Govind Ballabh Pant",
      "ans":"Sardar Vallabhbhai Patel"
  
  },
  {
      "que":"Why is Karnataka famous in India?",
      "A":"For it's wooden toys" ,
      "B" :"For it's size" ,
      "C": "For it's no. of malls" ,
      "D": "For Infyosis",
      "ans":"For it's wooden toys"
  },
  {
      "que":"Who is popularly called as the Iron Man of India?",
      "A":" Subhash Chandra Bose" ,
      "B" :"Sardar Vallabhbhai Patel" ,
      "C": "Jawaharlal Nehru" ,
      "D": "Govind Ballabh Pant",
      "ans":"Sardar Vallabhbhai Patel"
  },
  {
      "que":"Who invented the slogan GO CORONA GO ?",
      "A":" Rahul Gandhi" ,
      "B" :"Ramdas Athawale" ,
      "C": "Arvind Kejriwal" ,
      "D": "Narendra Modi",
      "ans":"Ramdas Athawale"
  },
  {
      "que":"What is India's national language?",
      "A":" Tamil" ,
      "B" :"Hindi" ,
      "C": "English" ,
      "D": "Punjabi",
      "ans":"Hindi"
  
  },
  {
      "que":"Who in India explained that the Earth was round?",
      "A":"Ashoka" ,
      "B" :"Kalidas" ,
      "C": "Aryabhatta" ,
      "D": "Mahatma Gandhi",
      "ans":"Aryabhatta"
  },
  {
      "que":"Which tale of India is the most famous?",
      "A":"Mahabarat" ,
      "B" :"Jataka tales" ,
      "C": "Don" ,
      "D": "Tarak Mehta Ka Ulta Chashma",
      "ans":"Mahabarat"
  },
  {
      "que":"Which diamond is taken from India and is the world's most precious diamond today?",
      "A":"Rhine blue" ,
      "B" :"Kohinoor Diamond" ,
      "C": "Blue stone" ,
      "D": "Shanti Diamond",
      "ans":"Kohinoor Diamond"
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


const index = 0;

const start = () => {
  // console.log("hello");
  // console.log(index);
 
  const list=quizQuestion[index];
  
  q1.innerHTML=list.que
  a1.innerHTML=list.A
  a2.innerHTML=list.B
  a3.innerHTML=list.C
  a4.innerHTML=list.D
}
start();