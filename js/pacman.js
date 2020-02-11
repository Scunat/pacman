//Création grille
var grille=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
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
var PacMan =
{
  x: 5,
  y: 2,
  direction: 0
};
//Creation Fantomes
var fantomeBleu =
{
  x: 9,
  y: 11,
  direction: 0
};
var fantomeRouge =
{
  x: 9,
  y:11,
  direction: 0
};
var fantomeOrange =
{
  x: 9,
  y:11,
  direction: 0
};
var fantomeVert =
{
  x: 9,
  y:11,
  direction: 0
};
function boucleRefresh()
{
  initGrille();
  bougePacMan();
  bougeMonFantome(fantomeBleu,"fantome-bleu" );
  bougeMonFantome(fantomeRouge, "fantome-rouge");
  bougeMonFantome(fantomeOrange, "fantome-orange");
  bougeMonFantome(fantomeVert, "fantome-vert");
  sensPacman();
  
  setTimeout (boucleRefresh, 1000);

  var directionElem=document.getElementById("sens");
  directionElem.innerHTML="Sens Pacman : "+derniereDirection;

  var scoreElem=document.getElementById("score");
  scoreElem.innerHTML= "Score : "+score;
}
boucleRefresh()
document.onkeypress=appuieTouche;
function bougePacMan()
{
  if(PacMan.direction==0)
  {
    PacMan.x--
  }
  else if(PacMan.direction==1)
  {
    PacMan.x++
  }
  else if(PacMan.direction==2)
  {
    PacMan.y--
  }
  else if(PacMan.direction==3)
  {
    PacMan.y++
  }
  testCollisionPacMan();
  sortMur();
  mangeBonbon();
  let pacMan=document.createElement("div");
  pacMan.classList.add("pacman");
  pacMan.style.gridColumn= (PacMan.x);
  pacMan.style.gridRow= (PacMan.y);
  _grille.appendChild(pacMan);
  if(nombreBonbon<=0){
    alert("Vous avez gagné !")
  }
  
}
function sensPacman()
{
  if(PacMan.direction==0)
  {
    derniereDirection="Gauche";
  }
  else if(PacMan.direction==1)
  {
    derniereDirection="Droite";
  }
  else if(PacMan.direction==2)
  {
    derniereDirection="Monter";
  }
  else if(PacMan.direction==3)
  {
    derniereDirection="Descendre";
  }
}

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
function testCollisionPacMan()
{
  if(PacMan.direction==0)
  {
    if(grille[PacMan.y-1][PacMan.x-1]==0)
    {
     PacMan.x++;
    }
  }
  else if(PacMan.direction==1)
  {
    if(grille[PacMan.y-1][PacMan.x-1]==0)
    {
     PacMan.x--;
    }
   
  }
  else if(PacMan.direction==2)
  {
    if(grille[PacMan.y-1][PacMan.x-1]==0)
    {
     PacMan.y++;
    }
  }
  else if(PacMan.direction==3)
  {
    if(grille[PacMan.y-1][PacMan.x-1]==0)
    {
     PacMan.y--;
    }
  }
}
function sortMur()
{
 if(PacMan.x>grille[0].length)
 {
   PacMan.x=1;
 }
 if(PacMan.x<1)
 {
   PacMan.x=grille[0].length;
 }
}
function sortMur()
{
  if(PacMan.x == 0 && PacMan.y == 11)
  {
    PacMan.x = 19;
  }
  if(PacMan.x == 20 && PacMan.y == 11)
  {
    PacMan.x = 1;
  }
}
function mangeBonbon()
{
  if(grille[PacMan.y-1][PacMan.x-1] == 2)
  {
    grille[PacMan.y-1][PacMan.x-1] = 1;
    nombreBonbon--;
    score++;
  }
}
var nombreBonbon=0;
function compteBonbon()
{
  for(let ligne in grille)
  {
    for(let col in grille[ligne])
    {
      if(grille[ligne][col]==2)
      {
       nombreBonbon ++;
      }
    }
  }
}
compteBonbon();
function bougeMonFantome(monFantome, classFantome)
{
  monFantome.direction =getRandomIntInclusive(0,3)
  if( monFantome.direction==0)
  {
    monFantome.x++;
  }
  else if( monFantome.direction==1)
  {
    monFantome.x--;
  }
  else if(monFantome.direction==2)
  {
    monFantome.y++;
  }
  else if(monFantome.direction==3)
  {
    monFantome.y--;
  }
  collisionFantome(monFantome)
  collisionFantomePacman(monFantome)
  let creationFantome=document.createElement("div");
  creationFantome.classList.add(classFantome);
  creationFantome.style.gridColumn= monFantome.x;
  creationFantome.style.gridRow= monFantome.y;
  _grille.appendChild(creationFantome);
}
function getRandomIntInclusive(min, max)
{
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}
function collisionFantome(monFantome)
{
  if(monFantome.direction==0)
  {
    if(grille[monFantome.y-1][monFantome.x-1]==0)
    {
      monFantome.x--;
    }
  }
  else if(monFantome.direction==1)
  {
    if(grille[monFantome.y-1][monFantome.x-1]==0)
    {
      monFantome.x++;
    }
  }
  else if(monFantome.direction==2)
  {
    if(grille[monFantome.y-1][monFantome.x-1]==0)
    {
      monFantome.y--;
    }
  }
  else if(monFantome.direction==3)
  {
    if(grille[monFantome.y-1][monFantome.x-1]==0)
    {
      monFantome.y++;
    }
  }
}
function collisionFantomePacman(monFantome)
{
  if(monFantome.x==PacMan.x)
  {
    if(monFantome.y==PacMan.y)
    {
      alert("Game over...");
    }
  }
}