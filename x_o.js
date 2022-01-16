let player=0 ;
var tab= [[],[],[]];
var winning ;
var chaToDraw ;
function sayHello(id){
    if(winning==true)
    return;
    chaToDraw = player%2==0?"X":"O";
   if(document.getElementById(id).innerHTML==""){
    document.getElementById(id).innerHTML= chaToDraw;
    addToTable(id);
  
    verWining()
    player++;
}
}
function addToTable (i){
    var id=i.toString() ;
    if (id.length>1) {
   tab[parseInt(id[0])][parseInt(id[1])]=chaToDraw
    }
    else {
       tab[0][parseInt(id[0])]=chaToDraw
    }
   }
function verWining(){
    if (tab[0][0]==tab[0][1] && tab[0][1]==tab[0][2] && tab[0][0]!=undefined) {
    strike.classList.add("strike-row-1");
    document.getElementById(win).innerHTML= chaToDraw;}

    if (tab[0][0]==tab[1][0] && tab[1][0]==tab[2][0] && tab[0][0]!=undefined){    
        strike.classList.add("strike-column-1");
        document.getElementById(win).innerHTML= chaToDraw;}
    
    if (tab[0][1]==tab[1][1] && tab[1][1]==tab[2][1] && tab[0][1]!=undefined ){
    strike.classList.add("strike-column-2")
    document.getElementById(win).innerHTML= chaToDraw;}
 
    if (tab[0][2]==tab[1][2] && tab[1][2]==tab[2][2] && tab[0][2]!=undefined){
    strike.classList.add("strike-column-3")
    document.getElementById(win).innerHTML= chaToDraw;}

    if (tab[1][0]==tab[1][1] && tab[1][1]==tab[1][2] && tab[1][0]!=undefined){
    strike.classList.add("strike-row-2")
    document.getElementById(win).innerHTML= chaToDraw;}

    if (tab[2][0]==tab[2][1] && tab[2][1]==tab[2][2]&& tab[2][0]!=undefined){
    strike.classList.add("strike-row-3")
    document.getElementById(win).innerHTML= chaToDraw;}

    if (tab[0][0]==tab[1][1] && tab[1][1]==tab[2][2] && tab[0][0]!=undefined){
    strike.classList.add("strike-diagonal-1")
    var x = document.getElementById(win)
    x.innerHTML = " is winnig" ;
    }

    if (tab[2][0]==tab[1][1] && tab[2][0]==tab[0][2] && tab[2][0]!=undefined){
    strike.classList.add("strike-diagonal-2")
    document.getElementById(win).innerHTML= chaToDraw;}


    /*winners =  [
     { var: a=tab[0][0]==tab[1][0] && tab[1][0]==tab[2][0]&& tab[0][0]!=undefined , strikeClass: "strike-row-1"  }, done

     { b=tab[0][1]==tab[1][1] && tab[1][1]==tab[2][1]&& tab[0][1]!=undefined , strikeClass: "strike-row-2"  }, done

     {c=tab[0][2]==tab[1][2] && tab[1][2]==tab[2][2]&& tab[0][2]!=undefined , strikeClass: "strike-row-3" }, done

     { d=tab[0][0]==tab[0][1] &&tab[0][1]==tab[0][2]&& tab[0][0]!=undefined , strikeClass: "strike-column-1"  }, done

     { e=tab[1][0]==tab[1][1] && tab[1][1]==tab[1][2]&& tab[1][0]!=undefined , strikeClass: "strike-column-2" }, done

     { f=tab[2][0]==tab[2][1] && tab[2][1]==tab[2][2]&& tab[2][0]!=undefined ,strikeClass: "strike-column-3"  }, done

     { g=tab[0][0]==tab[1][1] && tab[1][1]==tab[2][2]&& tab[0][0]!=undefined ,strikeClass: "strike-diagonal-1"  }, done

     { h=tab[2][0]==tab[1][1] && tab[2][0]==tab[0][2]&& tab[2][0]!=undefined ,strikeClass: "strike-diagonal-2"  },
    ] ;
    console.log(h)
 for (cont winner of)
    if (winner.a ||  winner.b || winner.c || winner.d || winner.e || winner.f || winner.g || winner.h){
    console.log(chaToDraw  + "  winning")
    winning=true
    

}*/
    

}


