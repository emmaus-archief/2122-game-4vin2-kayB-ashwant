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
const UITLEG = 3;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600;
var vijandY = 200;
var springSnelheid = 0;
var aanHetSpringen = false
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
  };
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)){
    spelerX = spelerX - speed
 };
  if (keyIsDown(87) || keyIsDown(UP_ARROW)){
    spelerY = spelerY - speed
  };
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)){
    spelerY = spelerY + speed
  };


  if (keyIsDown(68) && keyIsDown(RIGHT_ARROW)){
    spelerX = spelerX + speed * 2
  };
  if (keyIsDown(65) && keyIsDown(LEFT_ARROW)){
    spelerX = spelerX - speed * 2
  };
  if (keyIsDown(87) && keyIsDown(UP_ARROW)){
  spelerY = spelerY - speed * 2
  };
  if (keyIsDown(83) && keyIsDown(DOWN_ARROW)){
    spelerY = spelerY + speed * 2
  };

  if (aanHetSpringen === false && keyIsDown(32)) { // start met springen
    springSnelheid = 10;
    aanHetSpringen = true;
  }
  if (aanHetSpringen === true) { // bezig met springen
    spelerY = spelerY - springSnelheid ;
    springSnelheid = springSnelheid - 0.2 ;
  }
  if (aanHetSpringen === true && spelerY > 1440-30) { // klaar met springen
    aanHetSpringen = false;
    spelerY = 1440-25;
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
  

  if (spelerY - vijandY < 75 &&
    spelerY - vijandY > -75 &&
    spelerX - vijandX < 75 &&
    spelerX - vijandX > -75
  )
  (spelStatus = GAMEOVER)
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
    fill('blue')
     rect(0,0,2560,1440)
     
 // vijand
 fill('black')
 rect(vijandX -50, vijandY -50, 100, 100);
 fill('red')
 ellipse(vijandX - 30, vijandY - 10, 30,30)
 fill('red')
 ellipse(vijandX + 30, vijandY - 10, 30,30)
 fill('green')
 ellipse(vijandX, vijandY + 30, 80,10)
 fill('white')
 triangle(vijandX -30,vijandY + 26, vijandX - 15, vijandY +40, vijandX +1, vijandY +26)
 triangle(vijandX +1,vijandY + 26, vijandX + 15, vijandY +40, vijandX +34, vijandY +26)
  // kogel

  // speler
  var img;
  function preload() {

    img = LoadImage ('cjijc.png');
  }
    function setup (){

    image(img,spelerX,spelerY)
  }

    fill("white"); rect(spelerX - 25, spelerY - 25, 50, 50); 
    fill("black"); 
    ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  

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

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(2560, 1440);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
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
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
     textSize(50);
    Text('verloren',100,100);
    fill(0,0,0);
  }
}
