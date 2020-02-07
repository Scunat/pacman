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
function initGrille()
{
 let _grille=document.querySelector("#grille");
 _grille.innerHTML="";
 _grille.style = "grid-template-columns: repeat(" + grille[0].length + ", 40px);  grid-template-rows: repeat(" + grille.length + ", 40px)"
 for(let ligne in grille)
//console.log(grille[ligne])
  {
    for(let col in grille[ligne])
    {
      console.log(grille[ligne][col]);
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
      _grille.appendChild(monElement);
    }
  }
}
 initGrille();
function boucleRefresh()
{
 
}

