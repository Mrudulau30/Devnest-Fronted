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


