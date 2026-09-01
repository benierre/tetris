import { Tablero } from "./Tablero";
import { Tiempo } from "./Tiempo";
import { PiezaBase } from "./PiezaBase";

export class Tetris {
    private tablero: Tablero;
    private tiempo: Tiempo;

    constructor() {
        this.tablero = new Tablero();
        this.tiempo = new Tiempo();
    }

    inicio(pieza: PiezaBase): boolean {
        return this.tablero.agregarPiezaAleatoria(pieza);
    }

    estado(): Tablero {
        return this.tablero;
    }

    tick(): void {
        this.tiempo.tick();
        this.tablero.Moverabajo();
    }

    getCantidadTicks(): number {
        return this.tiempo.getTicks();
    }
}