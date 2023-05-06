var arr=["green","blue","red","yellow"];
var ra=[];
var cl=[];
var level=0;



$(document).keypress(first);
$("button").click(clicks);


function clicks(){
    var op=$(this).attr("class");
    cl.push(op);
    playsound(op);
    animate(op);
    check(cl.length-1);
}


function check(key){
    if(cl[key]===ra[key]){
        if(cl.length===ra.length)
           setTimeout(function(){
            first();
           },1000);
    }
    else{
       change();
       playsound("wrong");
       lastfun();
    }
}


function first(){
    level++;
    $("h1").text("LEVEL "+level);
   cl=[];
    var ran=Math.floor(Math.random()*4);
    var ty=arr[ran];
    ra.push(ty);
    $("."+ty).fadeOut(100).fadeIn(100);
    playsound(ty);
}


function playsound(name){
 var audio=new Audio("sounds/"+name+".mp3");
 audio.play();
}



function animate(op){
    $("."+op).addClass("pressed");
    setTimeout(function(){
        $("."+op).removeClass("pressed"); 
    },100);
}


function change(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over"); 
    },500);
}


function lastfun(){
    $("h1").text("GAME OVER PRESS ANY KEY TO RESTSRT");
    ra=[];
    level=0;
}










