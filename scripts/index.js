const man=` <div class="box1"></div>
<button class="box2" onClick="next()">next</button>`

const man2=`<div class="box3"></div>
<button class="box2" onClick="next()">next</button>`

const man3=` <div class="box4"></div>
<button class="box2" onClick="next()">next</button>`

     

const screens = [man, man2, man3];

var select = screens[0];

 

var i = 0;



function next(){

if (i === 2){

    i = 0;

}

else {

    i = i + 1;

}

select = screens[i];

document.querySelector(".starterGrid").innerHTML = select;

}

 

document.querySelector(".starterGrid").innerHTML = select;