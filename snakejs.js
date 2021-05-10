alert("hello");

let score=0;
let speed=5;
let lastPaintTime=0;
let inputDir={x: 0,y : 0};
let snakeArr=[
{x:13,y:15}
];
food={x:13,y:14};
// game functions
function main(ctime){

	window.requestAnimationFrame(main);
	// console.log(ctime);
	if ((ctime-lastPaintTime)/1000<1/speed){
		return;
	}
	 lastPaintTime=ctime;
	gameEngine();
}
	function isCollide(sarr){
		return false;
	}
    function gameEngine(){
    	// if collapsed
    	if(isCollide(snakeArr)){
    		alert("game over");
    		inputDir ={x:0,y:0};
    		snakeArr=[{x:13,y:15}];
    		score=0;
    	}
    	//snkae eatefood 
    	if (snakeArr[0].y=== food.y && snakeArr[0].x=== food.x){
    		snakeArr.unshift({x:snakeArr[0].x +inputDir.x,y:snakeArr[0].y +inputDir.y})
    		food={x:Math.round(2+(16-2)*Math.random()),y:Math.round(2+(16-2)*Math.random())}
    	}
    	// moving the snake
    	for (var i = snakeArr.length - 2; i >= 0; i--) {
    		snakeArr[i+1]={...snakeArr[i]};
    	}

    	snakeArr[0].x+=inputDir.x;
    	snakeArr[0].y+=inputDir.y;
    	// part 1 update snake array
    	board.innerHTML="";
    	snakeArr.forEach((e, index)=>{
    		snakeElement =document.createElement('div');
    		snakeElement.style.gridRowStart = e.y;
    		snakeElement.style.gridColumnStart = e.x;
    		snakeElement.classList.add('snake');
    		if(index==0)
    		{
    			snakeElement.classList.add('head');
    		}
    		else{
    			snakeElement.classList.add('snake')
    		}
    		board.appendChild(snakeElement);
    	});
 	 	  	foodElement =document.createElement('div');
    		foodElement.style.gridRowStart = food.y;
    		foodElement.style.gridColumnStart = food.x;
    		foodElement.classList.add('food');
    		board.appendChild(foodElement);
	}









// game logic

window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
	inputDir={x:0,y:1}//start game
	switch(e.key){
		case "ArrowUp":
		console.log("up");
		inputDir.x=0;
		inputDir.y=-1;
		break;
		case "ArrowDown":
		console.log("Down");
		inputDir.x=0;
		inputDir.y=1;
		break;
		case "ArrowLeft":
		console.log("Left");
		inputDir.x=-1;
		inputDir.y=0;
		break;
		case "ArrowRight":
		console.log("Right");
		inputDir.x=1;
		inputDir.y=0;
		break;
		default :
		break;

	}

});