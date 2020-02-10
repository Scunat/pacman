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
var PacMan =
{
  x: 5,
  y: 2,
  direction: 0
};
function boucleRefresh()
{
  initGrille();
  bougePacMan();
  setTimeout (boucleRefresh, 1000);
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
  mangeBonbon()
  let pacMan=document.createElement("div");
  pacMan.classList.add("pacman");
  pacMan.style.gridColumn= (PacMan.x);
  pacMan.style.gridRow= (PacMan.y);
  _grille.appendChild(pacMan);

  if(nombreBonbon<=0){
    alert("vous avez gagné")
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
function mangeBonbon()
{
  if(grille[PacMan.y-1][PacMan.x-1] == 2)
  {
    grille[PacMan.y-1][PacMan.x-1] = 1;
    nombreBonbon--;

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