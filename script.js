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
const GEWONNEN = 5;
var spelStatus = HOME;

var spelerX = 600; // x-positie van speler
var spelerY = 720-25; // y-positie van speler
var speed = 6; // snelheid speler
var vijandX = 600; // x-positie van vijand
var vijandY = 200; // y-positie van vijand
var vijandSpeed = 2.5; // Snelheid van vijand
var springSnelheid = 0; // snelheid van sprong
var valSnelheid = 0;
var aanHetSpringen = false; // sprong
var Zwaartekracht = false; //val
var img // plaatje1
var img2 // plaatje2
var img3 // plaatje3
var img4 // plaatje4
var img5 // plaatje5
var img6 // plaatje6
var img7 // plaatje7
var img8 // plaatje8
var img9 // plaatje9
var FONT // font voor tekst
var FONT2 // font voor tekst
var FONT3 // font voor tekst
var platformX1= 150;
var platformY1= 570;
var platformX2= 800;
var platformY2= 450;
var platformBreedte= 200;
var platformHoogte= 45;
var muntX = 1170;
var muntY = 600;
var punten = 0;
var platformSpeed1 = 1;
var platformSpeed2 = 1;
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
  
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
     spelerX = spelerX + speed
     if ( keyIsDown(16) && spelerY < 350){ // shift
      spelerX = spelerX + speed * 1.0; // extra snelheid
    };
  };
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)){
    spelerX = spelerX - speed
     if( keyIsDown(16) && spelerY < 350){
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
    spelerX = 0;
  }
  if(spelerX > 1280) {
    spelerX = 1280;
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

        //platform 1 zwaartekracht
        if (Zwaartekracht === true && 
          spelerX > platformX1 &&
          spelerX < platformX1 + platformBreedte &&
          spelerY > platformY1 - 10 - 10 &&
          spelerY <  platformY1) { // klaar met vallen
          spelerY = platformY1 - 10;
          Zwaartekracht = false;
          springSnelheid = 0
        }

        //platform 2 zwaartekracht
        if (Zwaartekracht === true && 
          spelerX > platformX2 &&
          spelerX < platformX2 + platformBreedte &&
          spelerY > platformY2 - 10 - 10 &&
          spelerY <  platformY2) { // klaar met vallen
          spelerY = platformY2 - 10;
          Zwaartekracht = false;
          springSnelheid = 0
        }



      //platform 1 movement
      if (platformX1 > platformX1 - 1 && 
        platformX1 < platformX1 + platformBreedte + 1) 
        {
          platformX1 = platformX1 + platformSpeed1
        }
          
        if (platformX1 === 350 || 
             platformX1 === 150) 
             {
            platformSpeed1 = platformSpeed1 * - 1
            }
       
      
      //platform 2 movement
      if (platformY2 > platformY2 - 1 && 
        platformY2 < platformY2 + platformHoogte + 1) 
        {
          platformY2 = platformY2 - platformSpeed2
         }
           
         if (platformY2 === 300 || 
          platformY2 === 450) 
          {
           platformSpeed2 = platformSpeed2 * - 1
            }

  
  // vijand
  

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
  // 72 45 60 69

  if (spelerY - vijandY < 37.5 &&
    spelerY - vijandY > -37.5 &&
    spelerX - vijandX < 37.5 &&
    spelerX - vijandX > -37.5
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
        muntY = muntY - 500;
        muntX = muntX -100;
      } 
  
      if ( muntX === 1070 && 
        muntY === 100 && 
        spelerY - muntY < 120 &&
        spelerY - muntY > -40 &&
        spelerX - muntX < 140 &&
        spelerX - muntX > -20) {
          muntY = muntY - 100;
          muntX = muntX - 900;
        }
      if(punten === 3){
        spelStatus = GEWONNEN;
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
 image(img9, vijandX - 37.5, vijandY - 37.5, 75,75)
 // Dit hieronder staat er omdat ik, Ashwant, hier hard aan had gewerkt en het wil laten staan :)
 /*fill('black')
 rect(vijandX -50/2, vijandY -50/2 +10, 100/2, 100/2);
 fill('red')
 ellipse(vijandX - 30/2, vijandY - 10/2, 30/2,30/2)
 fill('red')
 ellipse(vijandX + 30/2 +2, vijandY - 10/2, 30/2,30/2)
 fill('green')
 ellipse(vijandX, vijandY + 30, 80/2,10/2)
 fill('white')
 triangle(vijandX -25,vijandY + 26, vijandX - 15, vijandY +40, vijandX +1, vijandY +26)
 triangle(vijandX +1,vijandY + 26, vijandX + 15, vijandY +40, vijandX +26, vijandY +26)*/
  
   // platform
   image(img7,platformX1, platformY1, platformBreedte, platformHoogte);
   
   image(img7,platformX2, platformY2, platformBreedte, platformHoogte);
   
   
  // speler
  
    image(img, spelerX-50, spelerY-50, 100, 77);
    
  // punten en health
  //fill("red");
 // textSize(50);
  image(img2,10,10,50,50);
  text(punten ,55 ,53 );

  image(img2, muntX, muntY, 100, 100);
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
  img4 = loadImage('plaatjes/goombarushperfect.jpeg');
  img5 = loadImage('plaatjes/marioachtergrondwerk.jpg');
  img6 = loadImage('plaatjes/gameoverlol.jpg');
  img7 = loadImage('plaatjes/platformding.png');
  img8 = loadImage('plaatjes/victorieus.jpg');
  img9 = loadImage('plaatjes/spoek.png');
  FONT = loadFont('plaatjes/KdamThmorPro-Regular.ttf');
  FONT2 = loadFont('plaatjes/PermanentMarker-Regular.ttf');
  FONT3 = loadFont('plaatjes/Anton-Regular.ttf');
  }
  


  
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280,720);
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
    console.log("Spelen");
  }
  if (spelStatus === GAMEOVER) {
     //teken game-over scherm
    console.log("Game over");
    rect(0,0,1280,720);
    textFont(FONT);
    background(img6,0,0,1280,720);
    fill(255,255,255);
    text('Start: enter', 500,100);
    textSize(50);

    net = nu
    nu = keyIsDown(13); // enter
     if(net === false && 
    nu === true) {
      spelStatus = HOME;
     }
  }



if (spelStatus === HOME) {
  //teken uitleg scherm
  console.log("HOME");
   rect(0,0,1280,720);
   
  background(img4,0,0,1280,720);
  
  textSize(50);
  fill(255,255,255);
  textFont(FONT);
  text('Start: enter ',950,620);
  text('Uitleg: Backspace ',869,670);
  textSize(70);
  fill(207,181,59);
  textFont(FONT3);
  text('OEMPA GOEMBA:',100,100);

  textFont(FONT2);
  textSize(50);
  text('COIN RUSH',100,150);
  
  

  if (keyIsDown(8)){ // Backspace
spelStatus = UITLEG;
 }
 net = nu
 nu = keyIsDown(13); // enter
 if(net === false && 
  nu === true) { 
    spelerX = 100;
    spelerY = 720;
    vijandX = 600;
    vijandY = 400;
    muntX = 1170;
    muntY = 600;
    punten = 0;
    springSnelheid = 0;
 spelStatus = SPELEN;
 } 
}

if(spelStatus === UITLEG) {
  // teken UITLEGPLUS scherm
  console.log ("UITLEG");
  rect (0,0,1280,720);

  background(img5,0,0,1280,720);
  fill(255,255,255);
  textFont(FONT);
  text('Rechts: D, Pijl rechts ', 700,100);
  text('Links: A, Pijl links', 700,200);
  text('Springen: Spatie ', 700,300);
  text('Sprint: Secret hehe ', 700,400);
  text('(tip werkt alleen boven) ', 700,461);
  text('Home: Enter ', 700,561);
  textSize(50);
  net = nu
  nu = keyIsDown(13);
  if (net === false && 
    nu === true){ 
spelStatus = HOME;
  }
}

if(spelStatus === GEWONNEN) {
  // teken WINSCHERM
  console.log ("winnen");
  rect(0,0,1280,720);

  background(img8,0,0,1280,720);
  fill(255,255,255);
  textFont(FONT);
  text('home: enter' ,540,550);
  textSize(69);
  text('GG YOU DID IT' ,400,200);
  textSize (40);
  image(img2,10,10,50,50);
  text(punten ,55 ,52 )
  net = nu
  nu = keyIsDown(13);
  if (net === false &&
    nu === true){
      spelStatus = HOME;
    }
}
}
