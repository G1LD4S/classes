"use strict"

class Pokemon{ //On nomme la classe "Pokemon"
    constructor(name,attack,defense,hp,luck){ //On Liste dans l'ordre les propriétés ed la classe pour les affecter plus tard (Name, attack, defense, ...)
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){ //On commence à coder les attaque
        if(this.isLucky()){ //Si le pokemon a de la chance et que son attaque touche
            let damage=this.attack-pokemon.defense //Intéraction entre la défense du pokemon ennemi et l'attaque de notre pokemon
            pokemon.hp-=damage // Nombre de dégâts infligés au pokemon ennemi
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie"); //Affichage du texte indiquant quel Pokemon a fait combien de dégât à son ennemi
        }else { // Sinon
            console.log(this.name+" a raté son attaque"); //Affichage du fait que le pokemon a raté son attaque
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5); // Création de Dracaufeu et affectation de ses stats
let boulbi=new Pokemon('Boulbi',18,4,70,0.8); //Création de Boulbi et affectation de ses stats

while(dracofeu.hp >0 && boulbi.hp>0){ // Vérifie qu'aucun des 2 Pokemons n'est mort (n'a moins de ou 0 HP) et éxécute la boucle d'attaque jusqu'à ce qu'un des deux meurt
    dracofeu.attackPokemon(boulbi) // Dracaufeu attaque Boulbi
    if(boulbi.hp<=0){ // Si Boulbi a 0 HP ou moins 
        console.log(boulbi.name+" is dead !"); // Affichage d'un message "Boulbi est mort"
        break; // Si c'est le cas, la boucle s'arrête et le jeu se termine
    }
    boulbi.attackPokemon(dracofeu) // Boulbi attaque Dracaufeu
    if(dracofeu.hp<=0){ // Si Dracaudeu a 0 HP ou moins
        console.log(dracofeu.name+" is Dead !"); // Affichage d'un message "Dracaufeu est mort"
        break; // Si c'est le cas, la boucle s'arrête et le jeu se termine
    }
}