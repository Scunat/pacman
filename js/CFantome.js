class Fantome{
 x;
 y;
 direction;
 constructor()
 {
   this.x=9;
   this.y=11;
   this.direction=0;
 }
 bougeMonFantome(classFantome)
 {
    this.direction =getRandomIntInclusive(0,3)
   if( this.direction==0)
   {
    this.x++;
   }
   else if( this.direction==1)
   {
    this.x--;
   }
   else if(this.direction==2)
   {
    this.y++;
   }
   else if(this.direction==3)
   {
    this.y--;
   }
   this.collisionFantome()
   PacMan.collisionFantomePacman(this)
   let blocF=document.createElement("div");
   blocF.classList.add(classFantome);
   blocF.style.gridColumn= this.x;
   blocF.style.gridRow= this.y;
   _grille.appendChild(blocF);
 }
 collisionFantome()
{
  if(this.direction==0)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.x--;
    }
  }
  else if(this.direction==1)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.x++;
    }
  }
  else if(this.direction==2)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.y--;
    }
  }
  else if(this.direction==3)
  {
    if(grille[this.y-1][this.x-1]==0)
    {
        this.y++;
    }
  }
}
}
