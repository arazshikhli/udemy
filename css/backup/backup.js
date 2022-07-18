var circleTop=Math.random()*500;
circleTop=Math.floor(circleTop);
var circleLeft=Math.random()*500;
circleLeft=Math.floor(circleLeft);

let start=new Date().getTime();
function makeSapeAppear(){
    document.getElementById("circle").style.display="block";
    start=new Date().getTime();

}

setTimeout(makeSapeAppear,2000);
var colors=new Array();
    colors[0]="blue";
    colors[1]="red";
    colors[2]="green;"
    colors[3]="yellow";
    colors[4]="darkblue";
    colors[5]="brown";
    
   var TotalTimes=new Array();
   var clickChecker=0;
document.getElementById("circle").onclick=function(){
   
    document.getElementById("total").style.display="block";
    let circleColor=Math.random()*6;
    circleColor=Math.floor(circleColor);
    console.log(circleColor);
    document.getElementById("circle").style.display="none";
    let endTime=new Date().getTime()
    let timeTaken=(endTime-start)/1000;
    TotalTimes[clickChecker]=timeTaken;
    clickChecker++;
    document.getElementById("round-time").innerHTML=timeTaken+"s";
    setTimeout(makeSapeAppear,2000);
    circleLeft=Math.floor(Math.random()*500);
    circleTop=Math.floor(Math.random()*500);
    document.getElementById("circle").style.top=circleTop+"px";
    document.getElementById("circle").style.left=circleLeft+"px";
    console.log(circleLeft+"  "+circleTop);
    document.getElementById("circle").style.backgroundColor=colors[circleColor];
    
}
function arrayTotal(){
    var result=0;
    for(var i=0;i<TotalTimes.length;i++){
        result=result+TotalTimes[i];
    }
    return result;
}
var isChecer=0;
document.getElementById("total").onclick=function(){
   if(isChecer==0){
    var sums=arrayTotal();
    document.getElementById("show-total").innerHTML=sums+ "s";
    document.getElementById("show-total").style.display="block";
    sums=0;
    isChecer=1;

   }
   else{
    console.log("Start new game");
    isChecer=0;
   
   }
  
}

