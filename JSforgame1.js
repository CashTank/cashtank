

var ONE_FRAME_TIME = 1000 / 60 ;


//setInterval( mainloop, ONE_FRAME_TIME );
setInterval(tick, ONE_FRAME_TIME);

var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var sceneNum;		// Scene number
var pPosX;			// Initial player position
var pPosY;			// Initial player position
var destX;
var destY;
var pSpeed;
var numberCorrect = 0;

var bg = new Image();
bg.src = "island.png";

var bg2 = new Image();
bg2.src = "castlespritetop.png";

//draws tanks in proper position
function drawPlayer() {
	var tank = new Image();	
	tank.src = "tank.png"
	context.drawImage(tank, pPosX - 25, pPosY - 25, 50, 50);
}

//initialize variables
function initialize() {
	window.sceneNum = 0;		// Scene number
	window.pPosX = width/2;	// Initial player position
	window.pPosY = height/2;	// Initial player position
	window.destX = 0;
	window.destY = 0;
	window.pSpeed = 200;		// Player speed pixels per second
}

initialize();

setInterval(tick, ONE_FRAME_TIME);

function tick() {
	switch(sceneNum) {
		case 0:
			mainloop();
			break;
		case 1:
			shootloop();
			break;			
	}
}

//draws the main page 
var mainloop = function() {
	updateGame();
	drawGame();
};

//draws the castle shooting scene
var shootloop = function() {
	drawShoot();
	drawBullet();
	moveBullet();
};

//draws the map, calls function to draw castles and tank
function drawGame() {
	context.clearRect(0,0,width,height);
	context.drawImage(bg, 0, 0);
	drawCastles();
	drawPlayer();
}

//draws the castle shooting scene background
function drawShoot() {
	context.clearRect(0,0, width, height);
	context.drawImage(bg2, 0, 0);
}

//draws four castles
function drawCastles() {
	
	var castle1 = new Image();
	var castle2 = new Image();
	var castle3 = new Image();
	var castle4 = new Image();

	castle1.src = "castle1.png";
	castle2.src = "castle2.png";
	castle3.src = "castle3.png";
	castle4.src = "castle4.png";

	context.drawImage(castle1, 170, 170, 60, 69);
	context.drawImage(castle2, 430, 120, 60, 69);
	context.drawImage(castle3, 150, 380, 60, 69);
	//context.drawImage(castle4, 430, 400, 60, 69);
}

//moves the tank based on mouse click location
function movePlayer(x,y) {
	if (Math.abs(pPosX - x) > pSpeed / 25 || Math.abs (pPosY - y ) > pSpeed / 25) {
		var xDistance = x - pPosX;
		var yDistance = y - pPosY;
		var move = pSpeed / 25 / (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)));
		var xMove = xDistance * move;
		var yMove = yDistance * move;
		pPosX += xMove;
		pPosY += yMove;
		setTimeout(function() {
			movePlayer(destX,destY);
		}, 40);
	}
}

//listens for mouse clicks 
canvas.addEventListener("click", function(event) {
	destX = event.offsetX;
	destY = event.offsetY;
	//alert(destX + "," +destY);
	movePlayer(destX, destY);
}, false);

//starts the game when castles are clicked
function updateGame() {
	
	//*****************CASTLE 1************************	
	if(pPosX >= 170 && pPosX <= 230 && pPosY >= 195 && pPosY <= 240){
		
		var creditCardArray = [ ["Question 1: If you are late on ANY of your bills your credit card company can raise your interest rate. (true or false)", "true"], ["Question 2: If you have an average credit card interest rate and only make the minimum payment on a purchase how much more did that purchase cost you? \n a) double \n b) 20% \n c) 10%" , "a"],["Question 3: Current federal law has capped late payment fees at $45 dollars. (true or false)", "true"]];

			for(var i = 0; i < creditCardArray.length; i++){        
					
				var input = prompt(creditCardArray[i][0])
					
					if (input == creditCardArray[i][1]){                            
						numberCorrect++            
						alert("Correct! Great Job!            Total Number Correct: " + numberCorrect)  
																  
					}
					else{
						alert("Sorry, that is incorrect           Total Number Correct: " + numberCorrect)
						
					}
				if(i == creditCardArray.length-1) {
					pPosX = 330;
					pPosY = 330;

				}
			}
		
		sceneNum = 1;

	}
	
	//*****************CASTLE 2************************	
	if(pPosX >= 430 && pPosX <= 485 && pPosY >= 145 && pPosY <= 190){
		
		var creditScoreArray = [ ["Question 1: Where can you get a free credit score? \n a.)FreeCreditReport.com \n b.)FreeCreditScore.com \n c.)AnnualCreditReport.com", "c"], ["Question 2: Bankruptcy will stay on your credit report for 10 years.(true or false)" , "true"],["Question 3: What is the largest factor in your credit score at 35%? \n a) Total amount owed. \n b) Payment history. \n c)Length of credit history", "b"]];

			for(var i = 0; i < creditScoreArray.length; i++){        
					
				var input = prompt(creditScoreArray[i][0])
					
					if (input == creditScoreArray[i][1]){                            
						numberCorrect++            
						alert("Correct! Great Job!            Total Number Correct: " + numberCorrect)  
																  
					}
					else{
						alert("Sorry, that is incorrect           Total Number Correct: " + numberCorrect)
						
					}
				if(i == creditScoreArray.length-1) {
					pPosX = 330;
					pPosY = 330;

				}
			}
		
		sceneNum = 1;	
	}
	
	//*****************CASTLE 3************************	
	if(pPosX >= 155 && pPosX <= 205 && pPosY >= 405 && pPosY <= 450){
		
		var budgetingArray = [ ["Question 1: Your housing and debt monthly costs should be no more than what percent of your budget? \n a) 10% \n b) 40% \n c) 30%", "c"], ["Question 2: What is the government website gives advise on personal finance? \n a) www.mymoney.gov \n b) www.budgetwithgov.gov \n c) www.financialplanning.gov" , "a"],["Question 3: What percent of U.S. citizens nearing retirement have sufficient investment to maintain their current lifestyle? \n a) 80% \n b) more then 50% \n c) less then 10%", "c"]];

			for(var i = 0; i < budgetingArray.length; i++){        
					
				var input = prompt(budgetingArray[i][0])
					
					if (input == budgetingArray[i][1]){                            
						numberCorrect++            
						alert("Correct! Great Job!            Total Number Correct: " + numberCorrect)  
																  
					}
					else{
						alert("Sorry, that is incorrect           Total Number Correct: " + numberCorrect)
						
					}
				if(i == budgetingArray.length-1) {
					pPosX = 330;
					pPosY = 330;

				}
			}
		
		sceneNum = 1;	
	}
	
}


function drawBullet() {
	var bullet = new Image();
	bullet.src = 'bullet.png';
	bullet.setAttribute("id", "bullet");
	context.drawImage(bullet, 95, 373, 20, 14);
}




