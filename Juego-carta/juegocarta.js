//Diseñar una función constructora que acepte un apodo, 
// un número de vidas y un valor de carta (del 1 al 7). Además, 
// se requiere incluir dos métodos como propiedades: uno para reducir 
// las vidas y otro para mostrar el apodo junto con la cantidad de vidas restantes

'use strict'
function Apodo(apodo, vidas,carta){
    this.apodo=apodo;
    this.vidas=vidas;
    this.carta=carta;

    this.getVidas = function (vidasResto){
        this.vidas=this.vidas-vidasResto;
    };

    this.showApodo = function (){
        alert(`Su apodo es ${this.apodo} y tiene ${this.vidas} vidas restantes`)
    }
    

}

let apodoUno = new Apodo(prompt('Ingrese su apodo'),Number(prompt('Ingrese el numero de vidas')),Number(prompt('Ingrese una carta del 1 al 7')));
apodoUno.getVidas (Number(prompt('Ingrese el numero de vidas que ha perdido')));
apodoUno.showApodo ();