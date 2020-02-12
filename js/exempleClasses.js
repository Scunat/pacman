class Voiture{
 Marque;
 Modele;
 Couleur;
 constructor(marque, modele, couleur){
  this.Marque=marque;
  this.Modele=modele;
  this.Couleur=couleur;
}
roule(){
 return "Vroum vroum";
 }
 get Toto(){
  return "Voiture de marque "+this.Marque;
 }
 set Toto(laMarque){
  this.Marque=laMarque.toUpperCase();
 }
 get Modelel(){ 
  return "Voiture de modele "+this.Modele;
 }
 set Modele(leModele){
  this.Modele = leModele
 }
}
var maVoit= new Voiture("Fiat","500","Bleue Epic");
console.log(maVoit.roule());
console.log(maVoit.Toto);
maVoit.Toto="Ford";
console.log(maVoit.Toto);