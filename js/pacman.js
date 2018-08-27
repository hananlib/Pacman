var canvas;
var context;
var board;
var score;
var pac_color;
var interval;
var timeLeft;
var timeThen;
var bonusCreatureImage;
var monster, monsterImage;
var monstersArray = [];
var pacman;
var pacmanDirection;
var pacmanFaceShape;
var bonusCreature, bonusCreatureRemain;
var monstersStartPositions = [];
var lives;
var numOfMonsters;
var greatBall;
var medBall;
var regBall;
var pacmanFoodRemainOnGame;
var clockImage, clockCount;
var fruitImage, fruitCount;
var heartImage, bonusHeartCount;
var plusImage;
var normalMonsterImage1, normalMonsterImage2,normalMonsterImage3,normalMonsterImage4,normalMonsterImage5,normalMonsterImage6
    ,normalMonsterImage7,normalMonsterImage8,normalMonsterImage9,normalMonsterImage10,normalMonsterImage11,normalMonsterImage12
    ,normalMonsterImage13, normalMonsterImage14,normalMonsterImage15,normalMonsterImage16,normalMonsterImage17,normalMonsterImage18
    ,normalMonsterImage19,normalMonsterImage20,normalMonsterImage21,normalMonsterImage22,normalMonsterImage23,normalMonsterImage24;
var crazyMonsterImage1, crazyMonsterImage2,crazyMonsterImage3,crazyMonsterImage4,crazyMonsterImage5,crazyMonsterImage6
    ,crazyMonsterImage7,crazyMonsterImage8,crazyMonsterImage9,crazyMonsterImage10,crazyMonsterImage11,crazyMonsterImage12;
var monsterImage1, monsterImage2,monsterImage3,monsterImage4,monsterImage5,monsterImage6
    ,monsterImage7,monsterImage8,monsterImage9,monsterImage10,monsterImage11,monsterImage12;
var snitch1, snitch2, snitch3, snitch4, snitch5, snitch6 ,snitch7,snitch8,snitch9,snitch10,snitch11,snitch12, snitch13, snitch14, snitch15, snitch16;
var monsterPicCount;
var legoImage;
var numOfBalls,sumOfTime;
var timeout;
var ready;
var sillyMonsterCount;
var treeImage;
var intervalCounter;
var audio;

window.addEventListener("load", setup, false);

function setup()
{
    window.clearInterval(interval);
    window.clearTimeout(timeout);
    canvas = document.getElementById("theCanvas");
    context = canvas.getContext("2d");

    sumOfTime = document.getElementById("setupTime").value * 1000;
    numOfBalls = document.getElementById("setupBalls").value;
    numOfMonsters = document.getElementById("setupMonsters").value;

    intervalCounter = 0;

    audio = new Audio('sound/Gimmick! - Aporia.mp3');

    context.strokeStyle = "yellow";

    clockImage = new Image();
    clockImage.src = "images/time.png";
    fruitImage = new Image();
    fruitImage.src = "images/Cherry.png";
    heartImage = new Image();
    heartImage.src = "images/heart.png";
    plusImage = new Image();
    plusImage.src = "images/plus.png";

    crazyMonsterImage1 = new Image();
    crazyMonsterImage1.src = "images/monsters/crazyMonster1.png";
    crazyMonsterImage2 = new Image();
    crazyMonsterImage2.src = "images/monsters/crazyMonster2.png";
    crazyMonsterImage3 = new Image();
    crazyMonsterImage3.src = "images/monsters/crazyMonster3.png";
    crazyMonsterImage4 = new Image();
    crazyMonsterImage4.src = "images/monsters/crazyMonster4.png";
    crazyMonsterImage5 = new Image();
    crazyMonsterImage5.src = "images/monsters/crazyMonster5.png";
    crazyMonsterImage6 = new Image();
    crazyMonsterImage6.src = "images/monsters/crazyMonster6.png";
    crazyMonsterImage7 = new Image();
    crazyMonsterImage7.src = "images/monsters/crazyMonster7.png";
    crazyMonsterImage8 = new Image();
    crazyMonsterImage8.src = "images/monsters/crazyMonster8.png";
    crazyMonsterImage9 = new Image();
    crazyMonsterImage9.src = "images/monsters/crazyMonster9.png";
    crazyMonsterImage10 = new Image();
    crazyMonsterImage10.src = "images/monsters/crazyMonster10.png";
    crazyMonsterImage11 = new Image();
    crazyMonsterImage11.src = "images/monsters/crazyMonster11.png";
    crazyMonsterImage12 = new Image();
    crazyMonsterImage12.src = "images/monsters/crazyMonster12.png";

    normalMonsterImage1 = new Image();
    normalMonsterImage1.src = "images/monsters/normalMonster1.png";
    normalMonsterImage2 = new Image();
    normalMonsterImage2.src = "images/monsters/normalMonster2.png";
    normalMonsterImage3 = new Image();
    normalMonsterImage3.src = "images/monsters/normalMonster3.png";
    normalMonsterImage4 = new Image();
    normalMonsterImage4.src = "images/monsters/normalMonster4.png";
    normalMonsterImage5 = new Image();
    normalMonsterImage5.src = "images/monsters/normalMonster5.png";
    normalMonsterImage6 = new Image();
    normalMonsterImage6.src = "images/monsters/normalMonster6.png";
    normalMonsterImage7 = new Image();
    normalMonsterImage7.src = "images/monsters/normalMonster7.png";
    normalMonsterImage8 = new Image();
    normalMonsterImage8.src = "images/monsters/normalMonster8.png";
    normalMonsterImage9 = new Image();
    normalMonsterImage9.src = "images/monsters/normalMonster9.png";
    normalMonsterImage10 = new Image();
    normalMonsterImage10.src = "images/monsters/normalMonster10.png";
    normalMonsterImage11 = new Image();
    normalMonsterImage11.src = "images/monsters/normalMonster11.png";
    normalMonsterImage12 = new Image();
    normalMonsterImage12.src = "images/monsters/normalMonster12.png";
    normalMonsterImage13 = new Image();
    normalMonsterImage13.src = "images/monsters/normalMonster13.png";
    normalMonsterImage14 = new Image();
    normalMonsterImage14.src = "images/monsters/normalMonster14.png";
    normalMonsterImage15 = new Image();
    normalMonsterImage15.src = "images/monsters/normalMonster15.png";
    normalMonsterImage16 = new Image();
    normalMonsterImage16.src = "images/monsters/normalMonster16.png";
    normalMonsterImage17 = new Image();
    normalMonsterImage17.src = "images/monsters/normalMonster17.png";
    normalMonsterImage18 = new Image();
    normalMonsterImage18.src = "images/monsters/normalMonster18.png";
    normalMonsterImage19 = new Image();
    normalMonsterImage19.src = "images/monsters/normalMonster19.png";
    normalMonsterImage20 = new Image();
    normalMonsterImage20.src = "images/monsters/normalMonster20.png";
    normalMonsterImage21 = new Image();
    normalMonsterImage21.src = "images/monsters/normalMonster21.png";
    normalMonsterImage22 = new Image();
    normalMonsterImage22.src = "images/monsters/normalMonster22.png";
    normalMonsterImage23 = new Image();
    normalMonsterImage23.src = "images/monsters/normalMonster23.png";
    normalMonsterImage24 = new Image();
    normalMonsterImage24.src = "images/monsters/normalMonster24.png";

    monsterImage1 = new Image();
    monsterImage1.src = "images/monsters/monster1.png";
    monsterImage2 = new Image();
    monsterImage2.src = "images/monsters/monster2.png";
    monsterImage3 = new Image();
    monsterImage3.src = "images/monsters/monster3.png";
    monsterImage4 = new Image();
    monsterImage4.src = "images/monsters/monster4.png";
    monsterImage5 = new Image();
    monsterImage5.src = "images/monsters/monster5.png";
    monsterImage6 = new Image();
    monsterImage6.src = "images/monsters/monster6.png";
    monsterImage7 = new Image();
    monsterImage7.src = "images/monsters/monster7.png";
    monsterImage8 = new Image();
    monsterImage8.src = "images/monsters/monster8.png";
    monsterImage9 = new Image();
    monsterImage9.src = "images/monsters/monster9.png";
    monsterImage10 = new Image();
    monsterImage10.src = "images/monsters/monster10.png";
    monsterImage11 = new Image();
    monsterImage11.src = "images/monsters/monster11.png";
    monsterImage12 = new Image();
    monsterImage12.src = "images/monsters/monster12.png";

    snitch1 = new Image();
    snitch1.src = "images/monsters/snitch1.png";
    snitch2 = new Image();
    snitch2.src = "images/monsters/snitch2.png";
    snitch3 = new Image();
    snitch3.src = "images/monsters/snitch3.png";
    snitch4 = new Image();
    snitch4.src = "images/monsters/snitch4.png";
    snitch5 = new Image();
    snitch5.src = "images/monsters/snitch5.png";
    snitch6 = new Image();
    snitch6.src = "images/monsters/snitch6.png";
    snitch7 = new Image();
    snitch7.src = "images/monsters/snitch7.png";
    snitch8 = new Image();
    snitch8.src = "images/monsters/snitch8.png";
    snitch9 = new Image();
    snitch9.src = "images/monsters/snitch9.png";
    snitch10 = new Image();
    snitch10.src = "images/monsters/snitch10.png";
    snitch11 = new Image();
    snitch11.src = "images/monsters/snitch11.png";
    snitch12 = new Image();
    snitch12.src = "images/monsters/snitch12.png";
    snitch13 = new Image();
    snitch13.src = "images/monsters/snitch13.png";
    snitch14 = new Image();
    snitch14.src = "images/monsters/snitch14.png";
    snitch15 = new Image();
    snitch15.src = "images/monsters/snitch15.png";
    snitch16 = new Image();
    snitch16.src = "images/monsters/snitch16.png";

    treeImage = new Image();
    treeImage.src = "images/tree.png";

    monsterPicCount = 0;

    legoImage = new Image();
    legoImage.src = "images/square.png";

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    monstersStartPositions = [[0,0],[19,0],[0,9],[19,9]];
    pacmanFaceShape = 0;
    pacmanDirection = 0;


    for(var i = 0; i < numOfMonsters; i++)
    {
        monster = createMonster(i);
        monstersArray.push(monster);
    }

    document.getElementById("startButton").addEventListener("click", newGame, false );



    keysDown = {};
    addEventListener("keydown", function (e) {
        var k=e.keyCode;
        if([32,37,38,39,40].indexOf(e.keyCode) > -1)
           e.preventDefault();
        keysDown[38]=false;
        keysDown[37]=false;
        keysDown[39]=false;
        keysDown[40]=false;
        noKeyPress=false;
          if(k==38){
           keysDown[38] = true;
	     }
        if(k==37){
           keysDown[37] = true;
        }
        if(k==39) {
            keysDown[39] = true;
        }
        if(k==40) {
            keysDown[40] = true;
        }
    }, false);
}

function newGame()
{
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();

    bonusCreatureImage = new Image();
    bonusCreatureImage.src = "images/angle.png";

    timeLeft = sumOfTime;
    bonusHeartCount = 0;
    clockCount = 1;
    fruitCount = 1;

    sillyMonsterCount = 0;

    document.getElementById("firstLife").style.visibility = "visible";
    document.getElementById("secondLastLife").style.visibility = "visible";
    document.getElementById("lastLife").style.visibility = "visible";

    pacman = new Object();
    createBonusCreature();
    bonusCreatureRemain = 1;
    score = 0;
    lives = 3;

    board = [];

    pacmanFoodRemainOnGame = numOfBalls;

    greatBall = Math.floor(0.1 * numOfBalls);
    medBall = Math.floor(0.3 * numOfBalls);
    regBall = numOfBalls - medBall - greatBall;

    var cnt = 122, food_remain = numOfBalls;

    for (var i = 0; i < 20; i++) {
        board[i] = new Array();
        for (var j = 0; j < 10; j++) {

            if (findWalls(i, j) == true) {
                board[i][j] = 1;
            }
            else {
                var randomNum = Math.random();

                if(randomNum <= 1.0 * regBall / cnt)
                {
                    regBall--;
                    board[i][j] = 2;
                }
                else if(randomNum <= 1.0 * (medBall + regBall ) / cnt)
                {
                    medBall--;
                    board[i][j] = 3;
                }
                else if (randomNum <= 1.0 * (greatBall + medBall + regBall) / cnt ) {
                    greatBall--;
                    board[i][j] = 4;
                }
                else if(randomNum < 1.0 * (greatBall + medBall + regBall + clockCount) / cnt)
                {
                    clockCount--;
                    board[i][j] = 5;
                }
                else if(randomNum < 1.0 * (greatBall + medBall + regBall + clockCount + fruitCount) / cnt)
                {
                    fruitCount--;
                    board[i][j] = 6;
                }
                else {
                    board[i][j] = 0;
                }
                cnt--;
            }
        }
    }
    while(greatBall > 0 || medBall > 0 || regBall > 0 || clockCount > 0 || fruitCount > 0) {
        var emptyCell = findRandomEmptyCell(board);
        if (regBall > 0) {
            board[emptyCell[0]][emptyCell[1]] = 2;
            regBall--;
        }
        else if (medBall > 0) {
            board[emptyCell[0]][emptyCell[1]] = 3;
            medBall--;
        }
        else if (greatBall > 0) {
            board[emptyCell[0]][emptyCell[1]] = 4;
            greatBall--;
        }
        else if (clockCount > 0) {
            board[emptyCell[0]][emptyCell[1]] = 5;
            clockCount--;
        }
        else if (fruitCount > 0) {
            board[emptyCell[0]][emptyCell[1]] = 6;
            fruitCount--;
        }
    }

    reset(board);
    timeThen = Date.now();
}

function reset(board)
{

    keysDown[38]=false;
    keysDown[37]=false;
    keysDown[39]=false;
    keysDown[40]=false;
    pacmanDirection = 0;

    if(bonusHeartCount > 0) {
        var heartPosition = findRandomEmptyCell(board);
        board[heartPosition[0]][heartPosition[1]] = 7;
        bonusHeartCount = -1;
    }

    var monsterTurnPosition = [];
    for(var i = 0; i < monstersStartPositions.length; i ++)
    {
        monsterTurnPosition[i] = monstersStartPositions[i];
    }
    for(var i = 0; i < numOfMonsters; i++) {

        var indexOfPosition = Math.floor(Math.random() * monsterTurnPosition.length);
        var monsterRandomPosition = monsterTurnPosition[indexOfPosition];
        monstersArray[i].x = monsterRandomPosition[0] * 40;
        monstersArray[i].y = monsterRandomPosition[1] * 40;
        if(indexOfPosition > -1)
            monsterTurnPosition.splice(indexOfPosition, 1);

    }
    if(bonusCreature != null) {
        var bonusCreaturePositionTurn = monsterTurnPosition[0];
        bonusCreature.x = bonusCreaturePositionTurn[0] * 40;
        bonusCreature.y = bonusCreaturePositionTurn[1] * 40;
    }

    var pacmanPosition = findRandomEmptyCell(board);
    pacman.x = pacmanPosition[0] * 40;
    pacman.y = pacmanPosition[1] * 40;


    pac_color = "yellow";

    noKeyPress=true;

    window.clearInterval(interval);
    window.clearTimeout(timeout);

    ready = false;
    Draw();
    timeout = setTimeout(function(){interval=setInterval(UpdatePosition, 30); }, 2000);

}

 function findRandomEmptyCell(board){
    var i = Math.floor((Math.random() * 19) + 1);
    var j = Math.floor((Math.random() * 9) + 1);
    while(board[i][j]!=0)
    {
        i = Math.floor((Math.random() * 19) + 1);
        j = Math.floor((Math.random() * 9) + 1);
    }
    return [i,j];             
 }

function GetKeyPressed() {
    if (keysDown[38]) //up
            return 1;
    if (keysDown[40]) //down
            return 2;
    if (keysDown[37]) //left
            return 3;
    if (keysDown[39]) //right
            return 4;
}

function Draw() {
    // var lblScore = document.getElementById("lblScore");
    var lblTime = document.getElementById("lblTime");
    canvas.width=canvas.width; //clean board

    context.strokeRect(0,0,canvas.width,160);
    context.strokeRect(0,200,canvas.width,200);
    context.clearRect(1,1,canvas.width - 2, canvas.height - 2);

    lblScore.value = score;
    lblTime.value = (timeLeft/1000).toFixed(2);

    var direction = pacmanDirection;
    var centerPacmanX = pacman.x + 20;
    var centerPacmanY = pacman.y + 20;



    if(direction == 0 || direction == 1 || direction == 2 || direction == 3 || direction == 4 || noKeyPress)
    {

        var pacStart,pacEnd,eyeX,eyeY,bool;
        if(direction == 4 || noKeyPress || direction == 0)
        {
            pacStart = 0.15, pacEnd = 1.85, eyeX = 5, eyeY = -11;
        }
        else if(direction == 3)
        {
            pacStart = 0.85, pacEnd = 1.15, eyeX = -5, eyeY = -11, bool =true;
        }
        else if(direction == 2)
        {
            pacStart = 0.65, pacEnd = 0.35, eyeX = 11, eyeY = -5;
        }
        else if(direction == 1)
        {
            pacStart = 1.35, pacEnd = 1.65, eyeX = -11, eyeY = -5, bool = true;
        }
        if(pacmanFaceShape == 3)
        {
            pacStart = 0; pacEnd = 8;
        }

    }
    intervalCounter++;

        context.beginPath();
        context.arc(centerPacmanX, centerPacmanY, 17, pacStart * Math.PI, pacEnd * Math.PI, bool); // half circle
        context.lineTo(centerPacmanX, centerPacmanY);
        context.fillStyle = pac_color; //color
        context.fill();
        context.beginPath();
        context.arc(centerPacmanX + eyeX, centerPacmanY + eyeY, 2.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color
        context.fill();


    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            var center = new Object();
            center.x = i * 40 + 20;
            center.y = j * 40 + 20;

            if (board[i][j] == 1) {
                context.beginPath();
                context.rect(center.x-20, center.y-20, 40, 40);
                // context.fillStyle = "#223A5E"; //color
                // context.fill();
                context.drawImage(treeImage,i*40, j*40, 40,40);
            }
            else if(board[i][j] == 2)
            {
                context.beginPath();
                context.arc(center.x, center.y, 8, 0, 2 * Math.PI, true); // circle
                context.fillStyle = "#E2FFC6" ; // ball color
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = "#66CC01";
                context.stroke();
                context.fillStyle = "black";
                context.fillText("5", center.x - 3, center.y + 4);
                //context.drawImage(num5, center.x - 4, center.y -4, 7,10);
            }
            else if(board[i][j] == 3)
            {
                context.beginPath();
                context.arc(center.x, center.y, 8, 0, 2 * Math.PI); // circle
                context.fillStyle = "#ff8782" ; // ball color
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = "#FF0000";
                context.stroke();
                context.fillStyle = "black";
                context.fillText("10", center.x - 6, center.y + 4);

            }
            else if(board[i][j] == 4)
            {
                context.beginPath();
                context.arc(center.x, center.y, 8, 0, 2 * Math.PI); // circle
                context.fillStyle = "#95DEE3" ; // ball color
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = "#92A8D1";
                context.stroke();
                context.fillStyle = "black";
                context.fillText("25", center.x - 5.5, center.y + 4);

            }
            else if (board[i][j] == 5) {
                context.drawImage(clockImage,center.x - 15, center.y - 15, 30,30);
            }
            else if (board[i][j] == 6) {
                context.drawImage(fruitImage, center.x -15, center.y -15, 30,30);
            }
            else if(board[i][j] == 7) {
                context.drawImage(heartImage, center.x - 18, center.y - 17, 35, 35);
            }
        }
    }

    for(var i = 0; i < monstersArray.length; i++)
    {
        context.drawImage(monstersArray[i].img[Math.floor((monsterPicCount % (monster.img.length * 2)) / 2)], monstersArray[i].x, monstersArray[i].y, 40, 40);
    }
    monsterPicCount ++;

    if(bonusCreature != null)
        context.drawImage(bonusCreature.img[Math.floor((monsterPicCount % (bonusCreature.img.length * 3)) / 3)], bonusCreature.x, bonusCreature.y, 40, 40);

    if(!ready) {
        context.font= "45px Verdana";
        context.fillStyle = "white";
        context.fillText("Get Ready", 280, 160);
    }
}

function UpdatePosition()
{
    ready = true;
    var timeNow = Date.now();
    var delta = timeNow - timeThen;
    timeLeft -= delta;

    if(timeLeft <= 0)
        timeLeft = 0;

    pacmanPlay(pacman);
    for(var i = 0; i < monstersArray.length; i++) {
        monsterPlay(monstersArray[i]);

        if(collision(monstersArray[i], pacman))
        {
            livesDown();

        }
    }
    if(bonusCreature != null)
    {
        bonusCreaturePlay(bonusCreature);
        if (collision(pacman, bonusCreature)) {
            score += 50;
            //bonusCreatureRemain--;
            bonusCreature = null;
        }
    }
    if(timeLeft <= 0)
    {
        audio.pause();
        audio.currentTime = 0;
        window.clearInterval(interval);
        context.font = "30px Verdana";
        context.fillStyle = "white";
        if(score < 150)
            context.fillText("You can do better " + score + " points", 240, 160);
        else
            context.fillText("We have a Winner!!!", 240, 160);
    }
    else if(lives <= 0)
    {
        audio.pause();
        audio.currentTime = 0;
        window.clearInterval(interval);
        context.font = "60px Verdana";
        context.fillStyle = "white";
        context.fillText("You Lost!", 240, 160);
    }
    else
        Draw();

    timeThen = timeNow;
}

function findWalls(i, j)  // checks if the spot suppose to be an obstacle
{
    if(i > 9)
        i = 19 - i;

    if ((i == 0 && (j == 3 || j == 5)) || ((i == 1) && ((j == 1) || (j == 3) || (j == 5) ||  (j == 7) || (j == 8)))
        || ((i == 2) && ((j == 1) || (j ==7) || (j ==8))) || ((i == 3) && ((j == 3) || (j == 4) || j == 5))
        || ((i == 4) && ((j == 1) || (j == 4) || (j == 5) || (j == 6) || (j == 8))) || ((i == 5) && ((j == 1) || (j == 2) ||  (j == 8)))
        || ((i == 6) && ((j == 1) || (j == 4) || (j == 5) || (j == 7) || (j == 8))) || ((i == 7) && ((j == 3) || (j == 4)))
        || ((i == 8) && ((j == 0) || (j == 1) || (j == 6) || (j == 8) || (j == 9)))
        || ((i == 9) && ((j ==0) || (j == 1) || (j == 3) || (j == 5) || (j == 6) || (j == 8) || (j == 9))))
        return true;
}

function createMonster(type)
{
    monster = new Object();
    monster.type = type;

    monster.lastmove = -1;
    if(monster.type == 0) {
        monster.img = [normalMonsterImage1, normalMonsterImage2, normalMonsterImage3, normalMonsterImage4, normalMonsterImage5, normalMonsterImage6,
            normalMonsterImage7, normalMonsterImage8, normalMonsterImage9, normalMonsterImage10, normalMonsterImage11, normalMonsterImage12,normalMonsterImage13,
            normalMonsterImage14, normalMonsterImage15, normalMonsterImage16, normalMonsterImage17, normalMonsterImage18,
            normalMonsterImage19, normalMonsterImage20, normalMonsterImage21, normalMonsterImage22, normalMonsterImage23, normalMonsterImage24];
    }
    else if(monster.type == 1) {
        monster.img = [crazyMonsterImage1, crazyMonsterImage2, crazyMonsterImage3, crazyMonsterImage4, crazyMonsterImage5, crazyMonsterImage6
            , crazyMonsterImage7, crazyMonsterImage8, crazyMonsterImage9, crazyMonsterImage10, crazyMonsterImage11, crazyMonsterImage12];
    }

    else if(monster.type ==  2) {
        monster.img = [monsterImage1, monsterImage2,monsterImage3,monsterImage4,monsterImage5,monsterImage6
            ,monsterImage7,monsterImage8,monsterImage9,monsterImage10,monsterImage11,monsterImage12];
    }
    return monster;
}

function pacmanEats(x, y)
{
    if(board[x][y] > 1)
    {
        var item = board[x][y];
        board[x][y] = 0;
        return item;
    }
    else
        return 0;

}

function monstersHeuristics(direction, positionX, positionY, monsterType)
{
    if(direction == 1)
        positionY -= 5;
    else if(direction == 2)
        positionY += 5;
    else if(direction == 3)
        positionX -= 5;
    else if(direction == 4)
        positionX += 5;

    var diffX = Math.abs(pacman.x - positionX);
    var diffY = Math.abs(pacman.y - positionY);

    var monsterDistanceFromLeftHoleX = positionX;          //creature distance from the left hole on x
    //var monsterDistanceFromLeftHoleY = Math.abs(160 - positionY);       //creature distance from left hole on x
    var monsterDistanceFromRightHoleX = 760 - positionX;
    //var monsterDistanceFromRightHoleY = Math.abs(160 - positionY);

    var pacmanDistanceFromLeftHoleX = pacman.x;
    //var pacmanDistanceFromLeftHoleY = Math.abs(160 - pacman.y);       //creature distance from left hole on x
    var pacmanDistanceFromRightHoleX = 760 - pacman.x;
    //svar pacmanDistanceFromRightHoleY = Math.abs(160 - pacman.y);

    if(monsterType == 0)            // return 2 times distance by x and 1 time distance by y. avoids returning the same axis when he gets to a square
    {
        sillyMonsterCount++;
        if(sillyMonsterCount % 3 == 0)
            return diffY;
        else
            return diffX;
    }

    var normalPath = diffX + diffY;

    if(monsterType == 1)        //  returns the distance of both x and y
        return normalPath;
    else                        // returns the min distance between the path above and distance x and y through the holes
    {
        var distanceThroughLeftHole = (monsterDistanceFromLeftHoleX + pacmanDistanceFromRightHoleX) + diffY;
        var distanceThroughRightHole = (monsterDistanceFromRightHoleX + pacmanDistanceFromLeftHoleX) + diffY;
        return Math.min(normalPath, distanceThroughLeftHole, distanceThroughRightHole);
    }
}

function creatureMove(direction, creature, speed)
{
    if(direction == 1)
        creature.y -= 5 * speed;
    else if(direction == 2)
        creature.y += 5 * speed;
    else if(direction == 3) {
        creature.x -= 5 * speed;
        if(creature.x <= 0 && creature.y == 160){
            creature.x = 760 - Math.abs(creature.x);
        }
    }
    else if(direction == 4) {
        creature.x += 5 * speed;
        if (creature.x >= 760 && creature.y == 160)         // creature is going to the other side
            creature.x = Math.abs(760 - creature.x);
    }
}

function isPossibleMove(direction, positionX, positionY)
{
    var possible = false;
    if(direction==1)        //holding up
    {
        if(positionX%40 == 0 && positionY > 0 && (positionY % 40 != 0 || board[positionX / 40][positionY / 40 - 1] != 1))
                possible =  true;
    }
    else if(direction==2)        // holding down
    {
        if(positionX % 40 == 0 && positionY < 360 && (positionY % 40 != 0 || board[positionX/40][positionY/40 + 1] != 1))
                possible = true;
    }
    else if(direction==3)        // holding left
    {
        if(positionY % 40 == 0 && ((positionX > 0 && (positionX % 40 != 0 || board[positionX/40 - 1][positionY/40] != 1)) || (positionX <= 0 && positionY == 160)))
                possible = true;
    }
    else if(direction==4)        // holding right
    {
        if(positionY % 40 == 0 && ((positionX < 760  &&  (positionX % 40 != 0 || board[positionX / 40 + 1][positionY / 40] != 1)) ||(positionX >= 760 &&  positionY == 160)))
                possible = true;
    }
    return possible;
}


function pacmanPlay(pacman)
{
    var key = GetKeyPressed();
    if(isPossibleMove(key,pacman.x, pacman.y))
    {
        pacmanDirection = key;
    }
    if(isPossibleMove(pacmanDirection,pacman.x, pacman.y)) {
        creatureMove(pacmanDirection,pacman, 1);
    }

    var pacmanAte = pacmanEats(Math.round(pacman.x /40), Math.round(pacman.y / 40));
    if(pacmanAte > 0)
    {
        if(pacmanAte >= 2 && pacmanAte < 5) {
            if (pacmanAte == 2)
                score += 5;
            else if (pacmanAte == 3)
                score += 10;
            else if (pacmanAte == 4)
                score += 25;

            pacmanFoodRemainOnGame--;
        }
        else if(pacmanAte == 5)
            timeLeft += 10000;
        else if(pacmanAte == 6)
            score += 50;
        else if(pacmanAte == 7) {
            lives++;
            if(lives == 3)
                document.getElementById("firstLife").style.visibility = "visible";
            else
                document.getElementById("secondLastLife").style.visibility = "visible";

        }
    }
}

function createBonusCreature()
{
    bonusCreature = new Object();
    bonusCreature.img = [snitch1,snitch2,snitch3,snitch4,snitch5,snitch6,snitch7,snitch8,snitch9,snitch10,snitch11,snitch12,snitch13,snitch14,snitch15,snitch16];
    bonusCreature.lastmove = -1;
}

function monsterPlay(monster)
{
    var monsterMove;
    if(monster.lastmove%2 == 0)
        monsterMoveToAvoid = monster.lastmove - 1;
    else
        monsterMoveToAvoid = monster.lastmove + 1;

    var monsterBestMoveValue = 1200;
    for(var i = 1; i < 5; i++)
    {
        if(monsterMoveToAvoid != i && isPossibleMove(i,monster.x, monster.y))
        {
            var value = monstersHeuristics(i,monster.x, monster.y,monster.type)
            if(value < monsterBestMoveValue)
            {
                monsterMove = i;
                monsterBestMoveValue = value;
            }
            else if(value == monsterBestMoveValue)
            {
                var random = Math.random();
                if(random < 0.5)
                    monsterMove = i;
            }
        }
    }
    creatureMove(monsterMove, monster, 0.8);
    monster.lastmove = monsterMove;
}

function bonusCreaturePlay(bonusCreature)
{
    var moveToAvoid;
    if(bonusCreature.lastmove % 2 == 0)
        moveToAvoid = bonusCreature.lastmove - 1;
    else
        moveToAvoid = bonusCreature.lastmove + 1;

    var possibleBonusMoves = []
    for(var i = 1; i < 5; i++)
    {
        if(isPossibleMove(i,bonusCreature.x, bonusCreature.y) && moveToAvoid != i)
            possibleBonusMoves.push(i);
    }

    var move = possibleBonusMoves[Math.floor(Math.random() * possibleBonusMoves.length)];
    creatureMove(move, bonusCreature, 1);
    bonusCreature.lastmove = move;
}

function collision(creatureA, creatureB)
{
    var deltaX = Math.abs(creatureA.x - creatureB.x);
    var deltaY = Math.abs(creatureA.y - creatureB.y);
    if(deltaX < 25 && deltaY < 25)
        return true;

    return false;
}

function backToSetup() {
    window.clearInterval(interval);
    window.clearTimeout(timeout);
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("game").style.display = "none";
    document.getElementById("setup").style.display = "block";
}

function livesDown()
{
    if(bonusHeartCount == 0)
        bonusHeartCount = 1;
    if(lives == 3)
    {
        document.getElementById("firstLife").style.visibility = "hidden";
    }
    else if(lives == 2)
    {
        document.getElementById("secondLastLife").style.visibility = "hidden";
    }
    else if(lives == 1)
    {
        document.getElementById("lastLife").style.visibility = "hidden";
    }
    lives--;
    if(lives > 0)
        reset(board);
}

function exitGame(){
    audio.pause();
    window.clearTimeout(timeout);
    window.clearInterval(interval);
}