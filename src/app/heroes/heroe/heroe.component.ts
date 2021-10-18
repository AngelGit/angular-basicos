import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad  : number = 45;
    contadorDeVeces: number = 0;

    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.contadorDeVeces++;
        console.log("Esta es la: " + this.contadorDeVeces + "vez que entra en el método")
        this.edad = 50;
    }


}