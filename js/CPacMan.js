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
  if(this.direction==0)
  {
    this.x--
  }
  else if(this.direction==1)
  {
    this.x++
  }
  else if(this.direction==2)
  {
    this.y--
  }
  else if(this.direction==3)
  {
    this.y++
  }
  this.testCollisionPacMan();
  this.sortMur();
  this.mangeBonbon();
  let pacMan=document.createElement("div");
  pacMan.classList.add("pacman");
  pacMan.style.gridColumn= (this.x);
  pacMan.style.gridRow= (this.y);
  _grille.appendChild(pacMan);
  if(nombreBonbon<=0){
    alert("Vous avez gagné !")
  }
 }
 testCollisionPacMan()
 {
  if(this.direction==0)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.x++;
    }
  }
  else if(this.direction==1)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.x--;
    }
   
  }
  else if(this.direction==2)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.y++;
    }
  }
  else if(this.direction==3)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.y--;
    }
  }
 }
 sortMur()
 {
  if(this.x>grille[0].length)
 {
    this.x=1;
 }
  if(this.x<1)
 {
    this.x=grille[0].length;
 }
 }
 compteBonbon()
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
 mangeBonbon()
 {
  if(grille[this.y-1][this.x-1] == 2)
  {
    grille[this.y-1][this.x-1] = 1;
    nombreBonbon--;
    score++;
  }
 }
 sensPacman()
{
  if(PacMan.direction==0)
  {
    derniereDirection="Recule";
  }
  else if(PacMan.direction==1)
  {
    derniereDirection="Avance";
  }
  else if(PacMan.direction==2)
  {
    derniereDirection="Monte";
  }
  else if(PacMan.direction==3)
  {
    derniereDirection="Descend";
  }
}
collisionFantomePacman(blocF)
{
  if(blocF.x==this.x)
  {
    if(blocF.y==this.y)
    {
      alert("Game over...");
    }
  }
}
}
