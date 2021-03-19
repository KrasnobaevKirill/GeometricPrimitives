let cvs = document.getElementById("canvas");
let canv = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

canv.fillRect(0, 0, cvs.width ,cvs.height);
canv.fillStyle="black";
canv.strokeStyle="white";

let figures = [];
let r = 100;
let fi=Math.PI/2;
let k=0;
let n0=3;
let p=0;

document.addEventListener("click", check);
 
function check(click){
	f=false;
	figures[k]={
	x0:click.clientX,
	y0:click.clientY,
	n:n0,
	pos:p,
    }
	
	
	
	for (let ii=0; ii<=k; ii++)
	if ((click.clientX>figures[ii].x0-r) && 
	(click.clientX<figures[ii].x0+r) && 
	(click.clientY>figures[ii].y0-r) && 
	(click.clientY<figures[ii].y0+r) && (k!=ii))
	{figures[ii].n++;
    f=true;
	}
	
	if (f) k--;

	
	draw();
	k++;
}

function draw(){
	canv.fillRect(0, 0, cvs.width ,cvs.height);
	for (i=0; i<=k; i++) {
    canv.beginPath();
	canv.moveTo(figures[i].x0+r*Math.cos((fi+2*Math.PI*0)/figures[i].n), figures[i].y0+r*Math.sin((fi+2*Math.PI*0)/figures[i].n));
	for (ii=1; ii<=figures[i].n; ii++)
	canv.lineTo(figures[i].x0+r*Math.cos((fi+2*Math.PI*ii)/figures[i].n), figures[i].y0+r*Math.sin((fi+2*Math.PI*ii)/figures[i].n));
	canv.stroke();	
	
	}
	
}