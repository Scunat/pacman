class Pacman{
 x;
 y;
 direction;
 constructor()
 {
   this.x=5;
   this.y=2;
   this.direction=0;
 }
 bougePacMan()
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
}
