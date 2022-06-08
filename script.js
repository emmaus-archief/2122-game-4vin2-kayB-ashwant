/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const HOME = 3;
const UITLEG = 4;
var spelStatus = HOME;

var spelerX = 600; // x-positie van speler
var spelerY = 720-25; // y-positie van speler
var vijandX = 600; // x-positie van vijand
var vijandY = 200; // y-positie van vijand
var springSnelheid = 0; // snelheid van sprong
var valSnelheid = 0;
var aanHetSpringen = false // sprong
var Zwaartekracht = false //val
var img // plaatje1
var img2 // plaatje2
var img3 // plaatje3
var img4 // plaatje4
var img5 // plaatje5
var img6 // plaatje6
var platformpjeX= 150;
var platformpjeY= 570;
var platformBreedte= 200;
var platformHoogte= 10;
var muntX = 1170;
var muntY = 600;
var punten = 0;
var platformSpeed = 1;
var nu = false;
var net = false;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
 var beweegAlles = function () {
  // speler
  var speed = 6
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
     spelerX = spelerX + speed
     if ( keyIsDown(16)){ // shift
      spelerX = spelerX + speed * 1.0; // extra snelheid
    };
  };
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)){
    spelerX = spelerX - speed
     if( keyIsDown(16)){
      spelerX = spelerX - speed * 1.0 //extra snelheid
 };
};
 



  


  if (aanHetSpringen === false && keyIsDown(32)) { // start met springen
    springSnelheid = 13.3;
    aanHetSpringen = true;
  }
  if (aanHetSpringen === true) { // bezig met springen
    spelerY = spelerY - springSnelheid ;
    springSnelheid = springSnelheid - 0.2 ;
  }

  if (springSnelheid < 0 ) { // klaar met springen
    springSnelheid = 0;
    aanHetSpringen = false;
  }

  if(spelerX < 0) {
    spelerX = 0
  }
  if(spelerX > 1280) {
    spelerX = 1280
  }
  
  //platorm

      if( Zwaartekracht === false ) {
        valSnelheid = 0;
        Zwaartekracht = true;
        }
        if(Zwaartekracht === true){
          spelerY = spelerY - valSnelheid;
          valSnelheid = valSnelheid - 0.2;
        }
        if (Zwaartekracht === true && 
          spelerY > 720-30) { // klaar met vallen
          Zwaartekracht = false;
          spelerY = 720-25;
        }
        if (Zwaartekracht === true && 
          spelerX > platformpjeX &&
          spelerX < platformpjeX + platformBreedte &&
          spelerY > platformpjeY - 25 - 10 &&
          spelerY <  platformpjeY) { // klaar met vallen
          spelerY = platformpjeY-25;
          Zwaartekracht = false;
          springSnelheid = 0
        }


      //platform movement
      if (platformpjeX > platformpjeX - 1 && 
        platformpjeX < platformpjeX + platformBreedte + 1) {
          platformpjeX = platformpjeX + platformSpeed
        }
          if (platformpjeX === 350 || 
             platformpjeX === 150) {
            platformSpeed = platformSpeed * - 1
            }
       

  
  // vijand
  var vijandSpeed = 4

  if (spelerX > vijandX) {
    vijandX = vijandX + vijandSpeed
  };
  if (spelerY > vijandY) {
      vijandY = vijandY + vijandSpeed
  };
  if (spelerX < vijandX) {
    vijandX = vijandX - vijandSpeed
  };
  if (spelerY < vijandY) {
    vijandY = vijandY - vijandSpeed
};
  // kogel

 };
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  

  if (spelerY - vijandY < 62 &&
    spelerY - vijandY > -40 &&
    spelerX - vijandX < 53 &&
    spelerX - vijandX > -52
  )
  (spelStatus = GAMEOVER)
  // botsing kogel tegen vijand

  // update punten en health
  if(spelerY - muntY < 120 &&
    spelerY - muntY > -40 &&
    spelerX - muntX < 140 &&
    spelerX - muntX > -20  ) {
      punten = punten+1 
    }
  
     if( muntX === 1170 &&
      muntY === 600 &&
      spelerY - muntY < 120 &&
      spelerY - muntY > -40 &&
      spelerX - muntX < 140 &&
      spelerX - muntX > -20  ) {
        muntY = muntY - 500 ;
        muntX = muntX -100
      } 
  
      if ( muntX === 1070 && 
        muntY === 300 && 
        spelerY - muntY < 120 &&
        spelerY - muntY > -40 &&
        spelerX - muntX < 140 &&
        spelerX - muntX > -20) {
          muntX = muntX - 300
        }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
    //fill('blue')
     image(img3,0,0,1280,720)
     
 // vijand
 fill('black')
 rect(vijandX -50/2, vijandY -50/2 +10, 100/2, 100/2);
 fill('red')
 ellipse(vijandX - 30/2, vijandY - 10/2, 30/2,30/2)
 fill('red')
 ellipse(vijandX + 30/2 +2, vijandY - 10/2, 30/2,30/2)
 fill('green')
 ellipse(vijandX, vijandY + 30, 80/2,10/2)
 fill('white')
 triangle(vijandX -25,vijandY + 26, vijandX - 15, vijandY +40, vijandX +1, vijandY +26)
 triangle(vijandX +1,vijandY + 26, vijandX + 15, vijandY +40, vijandX +26, vijandY +26)
  
   // platform
   fill("red")
   rect(platformpjeX, platformpjeY, platformBreedte, platformHoogte);
   
   
  // speler
  
    image(img, spelerX-50, spelerY-50, 100, 77)
    
  // punten en health
  fill("red");
  textSize(50);
  text("punten = "+punten, 100,100);

  image(img2, muntX, muntY, 100, 100)
};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

  function preload() {
  img = loadImage('plaatjes/Goomba-icon.png');
  img2 = loadImage('plaatjes/mariomuntie.png');
  img3 = loadImage('plaatjes/achtergrondmetspelen.jpeg');
  img4 = loadImage('plaatjes/Yoshibeter.jpg')
  img5 = loadImage('plaatjes/marioachtergrondwerk.jpg')
  img6 = loadImage('gameoverlol.jpg')
  }
  


  
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280,720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  //background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("Spelen")
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("Game over")
    rect(0,0,1280,720);

    background(img6,0,0,1280,720);
    fill(255,255,255);
    text('Start: enter', 450,100);
    textSize(50);

    net = nu
    nu = keyIsDown(13) // enter
    if(net === false && 
     nu === true) {
      spelStatus = HOME;
     }
  }



if (spelStatus === HOME) {
  // teken uitleg scherm
  console.log("HOME");
   rect(0,0,1280,720);
   
  background(img4,0,0,1280,720)
  fill(255,255,255);
  text('Start: enter ', 450,100);
  text('Uitleg: Backspace ', 450,200);
  textSize(50);

  if (keyIsDown(8)){ // Backspace
spelStatus = UITLEG;
 }
 net = nu
 nu = keyIsDown(13) // enter
 if(net === false && 
  nu === true) { 
 spelStatus = SPELEN;
 } 
}

if(spelStatus === UITLEG) {
  // teken UITLEGPLUS scherm
  console.log ("UITLEG")
  rect (0,0,1280,720);

  background(img5,0,0,1280,720)
  fill(255,255,255)
  text('Rechts: D  ', 700,100);
  text('Links: A ', 700,200);
  text('Springen: Spatie ', 700,300);
  text('Sprint: Secret hehe ', 700,400);
  text('Home: Enter ', 700,500);
  textSize(50);
  net = nu
  nu = keyIsDown(13)
  if (net === false && 
    nu === true){ 
spelStatus = HOME;
  }
}
}
