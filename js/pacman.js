//Création grille
var maGrilleDef= new Grille();
var grille = maGrilleDef.getGrilleDef();
let _grille=document.querySelector("#grille");
var score=0;
var derniereDirection;
function initGrille()
{
 _grille.innerHTML="";
 _grille.style = "grid-template-columns: repeat(" + grille[0].length + ", 40px);  grid-template-rows: repeat(" + grille.length + ", 40px)"
 for(let ligne in grille)
//console.log(grille[ligne])
  {
    for(let col in grille[ligne])
    {
     // console.log(grille[ligne][col]);
      let monElement=document.createElement("div")
      if ((grille[ligne][col]) == (0))
      {
        monElement.classList.add("mur");
      }
      else if ((grille[ligne][col]) == (1))
      {
       monElement.classList.add("sol");
      }
      else if ((grille[ligne][col]) == (2))
      {
       monElement.classList.add("bonbon");
      }
      monElement.style.gridColumn=(+col)+1
      monElement.style.gridRow=(+ligne)+1
      _grille.appendChild(monElement);
    }
  }
}
 initGrille();

// Création Pacman + touches
var PacMan = new Pacman();

//Creation Fantomes
var fantomeBleu = new Fantome();
var fantomeRouge = new Fantome();
var fantomeOrange = new Fantome();
var fantomeVert = new Fantome();

function boucleRefresh()
{
  initGrille();
  PacMan.bougePacMan();
  fantomeBleu.bougeMonFantome("fantome-bleu" );
  fantomeRouge.bougeMonFantome( "fantome-rouge");
  fantomeOrange.bougeMonFantome( "fantome-orange");
  fantomeVert.bougeMonFantome( "fantome-vert");
  PacMan.sensPacman();
  setTimeout (boucleRefresh, 1000);
  var directionElem=document.getElementById("sens");
  directionElem.innerHTML="Sens Pacman : "+derniereDirection;
  var scoreElem=document.getElementById("score");
  scoreElem.innerHTML= "Score : "+score;
}
boucleRefresh()
document.onkeypress=appuieTouche;
function appuieTouche(event)
{
 console.log(event.key);
 switch(event.key)
 {
   case"a":
   case"A":
    PacMan.direction=0
   break;
   case"z":
   case"Z":
    PacMan.direction=1
   break;
   case"q":
   case"Q":
    PacMan.direction=2
   break;
   case"s":
   case"S":
    PacMan.direction=3
   break;
 }
}
var nombreBonbon=0;
PacMan.compteBonbon();
function getRandomIntInclusive(min, max)
{
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}